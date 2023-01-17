import {createFeatureSelector, createSelector} from "@ngrx/store";
import {EmployeeState} from "./emp.state";


const getEmpState = createFeatureSelector<EmployeeState>('Emp')


export const getEmp = createSelector(getEmpState,(state)=>{
  return state.employee
})

export const getEmpById = createSelector(getEmpState,(state,props)=>{
  const emp = state.employee.find((employe)=>employe.id === props.id)
  return emp
})
