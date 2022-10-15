import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RecordsService } from './model/records.service';
import { DateFormatorPipe } from './pipes/date-formator.pipe';
import { CalculatorPipe } from './pipes/calculator.pipe';
import { BudgetDeleteRecordComponent } from './budget-delete-record/budget-delete-record.component';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { BudgetChartComponent } from './budget-chart/budget-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewRecordComponent,
    HomeComponent,
    DateFormatorPipe,
    CalculatorPipe,
    BudgetDeleteRecordComponent,
    NumberFormatPipe,
    BudgetChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [RecordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
