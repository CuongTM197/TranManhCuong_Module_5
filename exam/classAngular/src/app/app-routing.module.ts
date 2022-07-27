import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {DetailStudentComponent} from "./detail-student/detail-student.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: 'list', component:StudentListComponent
  },
  {
    path: 'editStudent/:id', component: EditStudentComponent
  },
  {
    path: 'detailStudent/:id', component: DetailStudentComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
