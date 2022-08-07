import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorQuizComponent } from './administrator-quiz.component';

describe('AdministratorQuizComponent', () => {
  let component: AdministratorQuizComponent;
  let fixture: ComponentFixture<AdministratorQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratorQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
