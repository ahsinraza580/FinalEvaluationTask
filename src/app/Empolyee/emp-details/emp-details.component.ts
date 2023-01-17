import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {AppState} from "../../store/app.state";
import {EmployeeModel} from "../../Model/Employee.model";
import {getEmp} from "../state/emp.selector";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit,OnDestroy{
  Employee:EmployeeModel;
  EmpSubscriptipion:Subscription;


  constructor(private store:Store<AppState> , private route:ActivatedRoute,private router:Router) {}

  links = [
    {
      label:'Basic Details',
      route:'basic-details'
    },
    {
      label:'Salary',
      route:'salary'
    }
  ];
  activeLink = this.links[0];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id = params.get('id');
     this.EmpSubscriptipion = this.store.select(getEmp).subscribe((data)=>{
        this.Employee = data.find((emp)=> emp.id === id)
      })
    })

  }
  ngOnDestroy(): void {
   this.EmpSubscriptipion.unsubscribe();
  }



}
