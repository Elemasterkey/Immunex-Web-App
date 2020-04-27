import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcenterComponent } from './hcenter.component';

describe('HcenterComponent', () => {
  let component: HcenterComponent;
  let fixture: ComponentFixture<HcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
