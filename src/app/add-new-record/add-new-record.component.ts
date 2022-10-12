import { Component, OnInit } from '@angular/core';
import { ICONS } from '../model/mock-data';
import { NgForm } from '@angular/forms';
import { RecordsService } from '../model/records.service';
import { v4 as uuidv4 } from 'uuid';
import { Record } from '../model/Record';

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
    this.icons = ICONS;
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
    let newRecord: Record;
    const myId = uuidv4();

    if (!f.value.note) {
      newRecord = {
        ...f.value,
        id: myId,
        icon: this.selectedIcon.className,
        note: this.selectedIcon.name,
      };
    } else {
      newRecord = {
        ...f.value,
        id: myId,
        icon: this.selectedIcon.className,
      };
    }

    this.recordsService.addRecord(newRecord);

    localStorage.setItem(
      'records',
      JSON.stringify(this.recordsService.records)
    );
  }
}
