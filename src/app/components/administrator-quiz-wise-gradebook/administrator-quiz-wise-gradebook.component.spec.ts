import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorQuizWiseGradebookComponent } from './administrator-quiz-wise-gradebook.component';

describe('AdministratorQuizWiseGradebookComponent', () => {
  let component: AdministratorQuizWiseGradebookComponent;
  let fixture: ComponentFixture<AdministratorQuizWiseGradebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorQuizWiseGradebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorQuizWiseGradebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
