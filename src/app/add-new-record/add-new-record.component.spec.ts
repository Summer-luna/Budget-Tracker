import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRecordComponent } from './add-new-record.component';

describe('AddNewRecordComponent', () => {
  let component: AddNewRecordComponent;
  let fixture: ComponentFixture<AddNewRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
