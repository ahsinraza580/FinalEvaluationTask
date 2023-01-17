import {createReducer, on} from "@ngrx/store";
import {initialState} from "./emp.state";
import {addEmp, deleteEmp, updateEmp} from "./emp.actions";


const _empReducer = createReducer(
  initialState,
  on(addEmp,(state,action)=>{
    let emp = {...action.Employee}
    emp.id = (state.employee.length + 1).toString()
    return{
      ...state,
      employee:[...state.employee,emp]
    }
  }),on(updateEmp,(state,action)=>{
    const updatedEmployee = state.employee.map((emp)=>{
      return action.Employee.id === emp.id ? action.Employee : emp
    })
    return{
       ...state,
      employee:updatedEmployee
    }
  }),on(deleteEmp,(state,action)=>{
     const DeleteEmp = state.employee.filter((emp)=>{
       return action.id !== emp.id
     })
    return{
       ...state,
       employee:DeleteEmp
    }
  })
)


export function EmpReducer(state:any,action:any)
{
  return _empReducer(state,action)
}
