import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookCategoryComponent } from './gradebook-category.component';

describe('GradebookCategoryComponent', () => {
  let component: GradebookCategoryComponent;
  let fixture: ComponentFixture<GradebookCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebookCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradebookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
