import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailSalaryComponent } from './edit-detail-salary.component';

describe('EditDetailSalaryComponent', () => {
  let component: EditDetailSalaryComponent;
  let fixture: ComponentFixture<EditDetailSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailSalaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDetailSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
