import {EmployeeModel} from "../../Model/Employee.model";



export interface EmployeeState{
  employee:EmployeeModel[]
}

export const initialState:EmployeeState = {
  employee:[]
}
