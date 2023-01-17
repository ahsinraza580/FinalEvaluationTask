import {Component, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {EmployeeModel} from "../../Model/Employee.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {getEmp} from "../state/emp.selector";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {deleteEmp} from "../state/emp.actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,AfterViewInit,OnDestroy{
  empdata!:EmployeeModel[];
  EmpSub:Subscription;
  displayedColumns: string[] = ['id', 'name', 'email', 'age','salary','actions'];

  dataSource:MatTableDataSource<EmployeeModel> = new MatTableDataSource<EmployeeModel>()
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private store:Store<AppState>) {
  }


  ngOnInit(): void {

   this.EmpSub =  this.store.select(getEmp).subscribe((empdata)=>{
      this.empdata = empdata;
      this.dataSource = new MatTableDataSource<EmployeeModel>(this.empdata)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onDeleteEmp(id:string){
    if(confirm("Are You Sure You want to Delete this Employee")){
      this.store.dispatch(deleteEmp({id}))
    }
  }
  ngOnDestroy(): void {
    this.EmpSub.unsubscribe();
  }


}
