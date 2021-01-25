import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoInputComponent } from './demo-input.component';

describe('DemoInputComponent', () => {
  let component: DemoInputComponent;
  let fixture: ComponentFixture<DemoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoInputComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
