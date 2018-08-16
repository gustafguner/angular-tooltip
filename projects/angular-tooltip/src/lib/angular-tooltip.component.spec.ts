import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTooltipComponent } from './angular-tooltip.component';

describe('AngularTooltipComponent', () => {
  let component: AngularTooltipComponent;
  let fixture: ComponentFixture<AngularTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
