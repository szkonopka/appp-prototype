import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesHubComponent } from './activities-hub.component';

describe('ActivitiesHubComponent', () => {
  let component: ActivitiesHubComponent;
  let fixture: ComponentFixture<ActivitiesHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
