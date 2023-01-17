import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeModel} from "../../Model/Employee.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {addEmp} from "../state/emp.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit{

EmployeeForm!:FormGroup;

constructor(private store:Store<AppState>,private router:Router) {
}

  ngOnInit(): void {
    this.EmployeeForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      age:new FormControl('',[Validators.required]),
      salary:new FormControl('',[Validators.required])
    })

  }

  onAdd(){
    if (!this.EmployeeForm.valid) {
      return;
    }
    console.log(this.EmployeeForm.value);
    const Employee:EmployeeModel = {
      name:this.EmployeeForm.value.name,
      email:this.EmployeeForm.value.email,
      age:this.EmployeeForm.value.age,
      salary:this.EmployeeForm.value.salary
    }
    this.store.dispatch(addEmp({Employee}));
    this.router.navigate(['/emp']);
    this.EmployeeForm.reset();


  }


}
