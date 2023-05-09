import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo7DataBindingComponent } from './demo7-data-binding.component';

describe('Demo7DataBindingComponent', () => {
  let component: Demo7DataBindingComponent;
  let fixture: ComponentFixture<Demo7DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo7DataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo7DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
