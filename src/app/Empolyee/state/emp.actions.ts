import {createAction, props} from "@ngrx/store";
import {EmployeeModel} from "../../Model/Employee.model";


export const ADD_EMPLOYEE_ACTION = '[Employee page] add Employee';
export const UPDATA_EMPLOYEE_ACTION = '[Employee page] update Employee'
export const DELETE_EMPLOYEE_ACTION = '[Employee page] delete Employee'
export const addEmp = createAction(ADD_EMPLOYEE_ACTION,props<{Employee:EmployeeModel}>())

export const updateEmp = createAction(UPDATA_EMPLOYEE_ACTION,props<{Employee:EmployeeModel}>())


export const deleteEmp = createAction(DELETE_EMPLOYEE_ACTION,props<{id:string}>())
