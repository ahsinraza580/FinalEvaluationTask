import {EmployeeState} from "../Empolyee/state/emp.state";
import {EmpReducer} from "../Empolyee/state/emp.reducer";
import {ActionReducerMap , MetaReducer} from "@ngrx/store";
import {hydrationMetaReducer} from "../Empolyee/state/hydration/hydration.reducer";


export interface AppState{
  Emp:EmployeeState
}


export const appReducer:ActionReducerMap<AppState> = {
    Emp:EmpReducer
}

export const metaReducers:MetaReducer[] = [
  hydrationMetaReducer

]
