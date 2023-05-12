import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo9ProductComponent } from './demo9-product.component';

describe('Demo9ProductComponent', () => {
  let component: Demo9ProductComponent;
  let fixture: ComponentFixture<Demo9ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo9ProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo9ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
