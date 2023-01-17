import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailTabComponent } from './edit-detail-tab.component';

describe('EditDetailTabComponent', () => {
  let component: EditDetailTabComponent;
  let fixture: ComponentFixture<EditDetailTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDetailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
