import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10FormGroupComponent } from './demo10-form-group.component';

describe('Demo10FormGroupComponent', () => {
  let component: Demo10FormGroupComponent;
  let fixture: ComponentFixture<Demo10FormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo10FormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo10FormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
