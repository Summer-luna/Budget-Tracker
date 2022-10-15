import { Component, OnInit } from '@angular/core';
import { EXPENSE_ICONS, INCOME_ICONS } from '../model/mock-data';
import { NgForm } from '@angular/forms';
import { RecordsService } from '../model/records.service';
import { v4 as uuidv4 } from 'uuid';
import { Record } from '../model/Record';
import { Icon } from '../model/Icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.component.html',
  styleUrls: ['./add-new-record.component.css'],
})
export class AddNewRecordComponent implements OnInit {
  icons: Icon[];
  selectedIcon: any;
  isExpense: boolean = true;
  isIncome: boolean = false;
  record: Record;
  queryParams: any;
  submitButtonName: string;

  constructor(
    private recordsService: RecordsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.icons = EXPENSE_ICONS;
    this.selectedIcon = null;
    this.record = new Record();
    this.submitButtonName = 'Add';
  }

  ngOnInit(): void {}

  ngAfterContentChecked() {
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.submitButtonName = 'Update';
      let { year, month, date, icon } = this.route.snapshot.queryParams;
      this.selectedIcon = icon;

      // add clicked class to specific icon
      let x = icon.split(' ')[1];
      let item = document.querySelector('.' + x);
      item?.classList.add('clicked');

      // get current record used for display
      let dateRecords = this.recordsService.getRecords()[year][month][date];
      this.record = dateRecords.find((record: Record) => {
        return record.id == id;
      });

      // display the record is income or expense
      if (this.record.amount > 0) {
        this.toIncome();
      } else {
        this.toExpense();
      }
    }
  }

  // switch to expense icons section
  toExpense() {
    this.isExpense = true;
    this.isIncome = false;
    this.icons = EXPENSE_ICONS;
  }

  // switch to income icons section
  toIncome() {
    this.isIncome = true;
    this.isExpense = false;
    this.icons = INCOME_ICONS;
  }

  // animation for click an icon
  clickIconHandler(event: any, icon: any) {
    const items = document.querySelectorAll('.clicked');

    items.forEach((item) => {
      item.classList.remove('clicked');
    });
    event.target.classList.add('clicked');
    this.selectedIcon = icon;
  }

  // click add button handler
  clickAddBtn(f: NgForm) {
    let newRecord: Record;
    const myId = uuidv4();
    // generate new record
    let { amount } = f.value;

    // if amount is a decimal number, limit it to two decimal number
    if (amount % 1 != 0) {
      amount = Number(amount.toFixed(2)); // toFixed return a string
    }

    // if record is expense, set amount to negative number
    if (this.isExpense) {
      amount = -amount;
    }

    // if there is no note that user type in, use icon name as default
    if (!f.value.note) {
      newRecord = {
        ...f.value,
        amount: amount,
        id: myId,
        icon: this.selectedIcon.className,
        note: this.selectedIcon.name,
      };
    } else {
      // if user type in, just use it instead of default
      newRecord = {
        ...f.value,
        amount: amount,
        id: myId,
        icon: this.selectedIcon.className || this.selectedIcon,
      };
    }

    // check if route has an id. if yes, update record. if no, add new record
    let id = this.route.snapshot.params['id'];
    if (id) {
      let { year, month, date } = this.route.snapshot.queryParams;
      this.recordsService.updateRecord({ year, month, date }, id, newRecord);
    } else {
      this.recordsService.addRecord(newRecord);
    }

    this.recordsService.savetoLocalStorage();
    this.router.navigate(['/']);
  }
}
