import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo6UploadFileComponent } from './demo6-upload-file.component';

describe('Demo6UploadFileComponent', () => {
  let component: Demo6UploadFileComponent;
  let fixture: ComponentFixture<Demo6UploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demo6UploadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo6UploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
