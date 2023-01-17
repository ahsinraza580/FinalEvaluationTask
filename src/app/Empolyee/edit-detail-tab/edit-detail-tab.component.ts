import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {ActivatedRoute, Router} from "@angular/router";
import {getEmp} from "../state/emp.selector";
import {EmployeeModel} from "../../Model/Employee.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-detail-tab',
  templateUrl: './edit-detail-tab.component.html',
  styleUrls: ['./edit-detail-tab.component.css']
})
export class EditDetailTabComponent implements OnInit,OnDestroy{
  Id: string;
  Employee:EmployeeModel;
  EmpSubscriptipion:Subscription;

  constructor(private store:Store<AppState> , private route:ActivatedRoute,private router: Router,) {
  }

  ngOnInit(): void {
     this.route.parent.paramMap.subscribe((params)=>{
       this.Id = params.get('id')
       this.EmpSubscriptipion = this.store.select(getEmp).subscribe((data)=>{
         this.Employee = data.find((emp)=> emp.id === this.Id)
       })
     })

  }
  ngOnDestroy(): void {
    this.EmpSubscriptipion.unsubscribe();
  }

}
