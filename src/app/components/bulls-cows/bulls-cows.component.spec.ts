import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullsCowsComponent } from './bulls-cows.component';

describe('BullsCowsComponent', () => {
  let component: BullsCowsComponent;
  let fixture: ComponentFixture<BullsCowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullsCowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullsCowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
