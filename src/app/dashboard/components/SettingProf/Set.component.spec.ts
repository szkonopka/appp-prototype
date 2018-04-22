import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetComponent } from './Set.component';

describe('StatisticsComponent', () => {
  let component: SetComponent;
  let fixture: ComponentFixture<SetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
