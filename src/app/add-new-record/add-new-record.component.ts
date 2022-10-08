import { Component, OnInit } from '@angular/core';
import icons from '../../data/icons.json';
import { NgForm } from '@angular/forms';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-add-new-record',
  templateUrl: './add-new-record.component.html',
  styleUrls: ['./add-new-record.component.css'],
})
export class AddNewRecordComponent implements OnInit {
  icons: any;
  iconClicked: boolean;
  selectedIcon: any;

  constructor(private recordsService: RecordsService) {
    this.icons = icons;
    this.iconClicked = false;
    this.selectedIcon = null;
  }

  ngOnInit(): void {}

  // animation for click an icon
  clickIcon(event: any, icon: any) {
    const items = document.querySelectorAll('.clicked');

    items.forEach((item) => {
      item.classList.remove('clicked');
    });
    event.target.classList.add('clicked');
    this.selectedIcon = icon;
    this.iconClicked = true;
  }

  // click add button handler
  clickAddBtn(f: NgForm) {
    let newRecord;

    if (!f.value.note) {
      newRecord = {
        ...f.value,
        icon: this.selectedIcon.address,
        note: this.selectedIcon.name,
      };
    } else {
      newRecord = {
        ...f.value,
        icon: this.selectedIcon.address,
      };
    }

    this.recordsService.addRecord(newRecord);
    console.log(this.recordsService.records);
    localStorage.setItem(
      'records',
      JSON.stringify(this.recordsService.records)
    );
  }
}
