import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorViewStudentComponent } from './administrator-view-student.component';

describe('AdministratorViewStudentComponent', () => {
  let component: AdministratorViewStudentComponent;
  let fixture: ComponentFixture<AdministratorViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorViewStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
