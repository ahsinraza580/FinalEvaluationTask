import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModule} from "./material/mat.module";
import { HeaderComponent } from './shared/header/header.component';
import { EmployeeListComponent } from './Empolyee/employee-list/employee-list.component';
import { AddEmpComponent } from './Empolyee/add-emp/add-emp.component';
import { EditEmpComponent } from './Empolyee/edit-emp/edit-emp.component';
import { EmpDetailsComponent } from './Empolyee/emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';
import {StoreModule} from "@ngrx/store";
import {appReducer,metaReducers} from "./store/app.state";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";
import { EditDetailTabComponent } from './Empolyee/edit-detail-tab/edit-detail-tab.component';
import { EditDetailSalaryComponent } from './Empolyee/edit-detail-salary/edit-detail-salary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    AddEmpComponent,
    EditEmpComponent,
    EmpDetailsComponent,
    HomeComponent,
    EditDetailTabComponent,
    EditDetailSalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer,{metaReducers}),
    StoreDevtoolsModule.instrument({
     logOnly:environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
