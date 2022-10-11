import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewRecordComponent } from './add-new-record/add-new-record.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddNewRecordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
