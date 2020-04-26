import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCurriculumComponent } from './description-curriculum.component';

describe('DescriptionCurriculumComponent', () => {
  let component: DescriptionCurriculumComponent;
  let fixture: ComponentFixture<DescriptionCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
