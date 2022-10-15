import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';
import { BudgetDeleteRecordComponent } from './budget-delete-record/budget-delete-record.component';
import { BudgetChartComponent } from './budget-chart/budget-chart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'delete/:id', component: BudgetDeleteRecordComponent }],
  },
  { path: 'add', component: AddNewRecordComponent },
  { path: 'edit/:id', component: AddNewRecordComponent },
  { path: 'chart', component: BudgetChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
