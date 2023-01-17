import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./Empolyee/employee-list/employee-list.component";
import {AddEmpComponent} from "./Empolyee/add-emp/add-emp.component";
import {EditEmpComponent} from "./Empolyee/edit-emp/edit-emp.component";
import {EmpDetailsComponent} from "./Empolyee/emp-details/emp-details.component";
import {HomeComponent} from "./home/home.component";
import {EditDetailTabComponent} from "./Empolyee/edit-detail-tab/edit-detail-tab.component";
import {EditDetailSalaryComponent} from "./Empolyee/edit-detail-salary/edit-detail-salary.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'emp' ,component:EmployeeListComponent},
  {path:'emp/add',component:AddEmpComponent},
  {path:'emp/edit/:id',component:EditEmpComponent},
  {path:'emp/details/:id',component:EmpDetailsComponent,
  children:[
    {path:'',redirectTo:'basic-details',pathMatch:'full'},
    {path:'basic-details',component:EditDetailTabComponent},
    {path:'salary',component:EditDetailSalaryComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
