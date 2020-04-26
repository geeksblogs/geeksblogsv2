import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCourseListComponent } from './latest-course-list.component';

describe('LatestCourseListComponent', () => {
  let component: LatestCourseListComponent;
  let fixture: ComponentFixture<LatestCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
