import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo8ServiceComponent } from './demo8-service.component';

describe('Demo8ServiceComponent', () => {
  let component: Demo8ServiceComponent;
  let fixture: ComponentFixture<Demo8ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo8ServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo8ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
