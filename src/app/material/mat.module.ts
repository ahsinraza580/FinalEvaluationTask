import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
const material:any = [
 MatButtonModule,
 MatToolbarModule,
 MatTableModule,
  MatFormFieldModule,
  MatSortModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ]
})
export class MatModule { }
