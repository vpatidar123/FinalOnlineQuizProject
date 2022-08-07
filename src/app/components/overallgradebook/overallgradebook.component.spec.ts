import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallgradebookComponent } from './overallgradebook.component';

describe('OverallgradebookComponent', () => {
  let component: OverallgradebookComponent;
  let fixture: ComponentFixture<OverallgradebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallgradebookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallgradebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
