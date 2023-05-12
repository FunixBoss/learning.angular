import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Demo1Component } from './components/demo1/demo1.component'
import { Demo2Component } from './components/demo2-directive-and-search/demo2.component';
import { Demo3Component } from './components/demo3-event/demo3.component';
import { Demo4Component } from './components/demo4-event/demo4.component';
import { Demo5Component } from './components/demo5-select-option/demo5.component';
import { Demo6UploadFileComponent } from './components/demo6-upload-file/demo6-upload-file.component';
import { Demo7DataBindingComponent } from './components/demo7-data-binding/demo7-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo8ServiceComponent } from './components/demo8-service/demo8-service.component';
import { DemoService } from './services/demo.service';
import { Demo9ProductComponent } from './components/demo9-product/demo9-product.component';
import { AppComponent } from './app.component';
import { Demo10FormGroupComponent } from './components/demo10-form-group/demo10-form-group.component';
import { Demo3BComponent } from './components/demo3-event/demo3b.component';
import { CertificateService } from './services/certificate.service';
import { RoleService } from './services/role.service';
// 5 mucj didch
// 1. chứa các thư viện
// 2. chứa các component
// 3. sử dụng các service
// 4. sử dụng routing, load cái đường dẫn
// 5. modle có thể chứa những module con zo trong
@NgModule({
  declarations: [ // nơi khai báo component con
    AppComponent, 
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo3BComponent,
    Demo4Component,
    Demo5Component,
    Demo6UploadFileComponent,
    Demo7DataBindingComponent,
    Demo8ServiceComponent,
    Demo9ProductComponent,
    Demo10FormGroupComponent
  ],
  imports: [ // khai báo thư viện, module, đường dẫn
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for one-way binding of demo 7
    ReactiveFormsModule // for formGroup in dmeo 10
  ],
  providers: [
    DemoService,
    CertificateService,
    RoleService
  ], // tạo service, thì khai báo zo đây
  bootstrap: [Demo10FormGroupComponent] // xác định khi có nhiều component, thì component nào chạy mặc định
})
export class AppModule { }
