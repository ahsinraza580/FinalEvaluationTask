import {Component, OnDestroy, OnInit} from '@angular/core';
import {getEmp} from "../state/emp.selector";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {ActivatedRoute} from "@angular/router";
import {EmployeeModel} from "../../Model/Employee.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-detail-salary',
  templateUrl: './edit-detail-salary.component.html',
  styleUrls: ['./edit-detail-salary.component.css']
})
export class EditDetailSalaryComponent implements OnInit,OnDestroy{
  Id: string;
  private sub: any;
  Employee:EmployeeModel;
  EmpSubscriptipion:Subscription;
  constructor(private store:Store<AppState> , private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    // Get parent ActivatedRoute of this route.
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
