import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentScoreComponent } from './present-score.component';

describe('PresentScoreComponent', () => {
  let component: PresentScoreComponent;
  let fixture: ComponentFixture<PresentScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
