import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentComponent } from './all-student/all-student.component';
import { ChartsComponent } from './charts/charts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

 const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'all',component:AllStudentComponent},
  // {path:'all',component:StudentAllComponent},
  {path:'add',component:StudentCreateComponent},  
  {path:'edit',component:StudentEditComponent},
  {path:'chart',component:ChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
