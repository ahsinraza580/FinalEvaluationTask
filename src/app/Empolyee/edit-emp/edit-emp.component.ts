import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {EmployeeModel} from "../../Model/Employee.model";
import {Subscription} from "rxjs";
import {getEmpById} from "../state/emp.selector";
import {updateEmp} from "../state/emp.actions";

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit{
  EmployeeForm!:FormGroup;
  Employe:EmployeeModel;
  EmpSubscription:Subscription;
  constructor(private route:ActivatedRoute,private store:Store<AppState>,private router:Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'))
      const id = params.get('id');
      this.EmpSubscription = this.store.select(getEmpById,{id}).subscribe((data)=>{
        this.Employe = data;
        this.CreateForm();
      })
    })


  }

  CreateForm()
  {
    this.EmployeeForm = new FormGroup({
      name:new FormControl(this.Employe.name,[Validators.required]),
      email:new FormControl(this.Employe.email,[Validators.required,Validators.email]),
      age:new FormControl(this.Employe.age,[Validators.required]),
      salary:new FormControl(this.Employe.salary,[Validators.required])
    })
  }

  onEdit(){
    if (!this.EmployeeForm.valid) {
      return;
    }
    console.log(this.EmployeeForm.value);

     const name = this.EmployeeForm.value.name;
     const email = this.EmployeeForm.value.email;
     const age = this.EmployeeForm.value.age;
     const salary = this.EmployeeForm.value.salary;

     const Employee: EmployeeModel = {
       id:this.Employe.id,
       name,
       email,
       age,
       salary,
    }

    this.store.dispatch(updateEmp({Employee}));
    this.EmployeeForm.reset();
    this.router.navigate(['/emp'])

  }
}
