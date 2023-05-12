import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/models/account.model';
import { Certificate } from 'src/app/models/certificate.model';
import { Role } from 'src/app/models/role.model';
import { CertificateService } from 'src/app/services/certificate.service';
import { RoleService } from 'src/app/services/role.service';
import { min } from 'src/app/validators/min.validator';

@Component({
  selector: 'app-root',
  templateUrl: './demo10-form-group.component.html',
  styleUrls: ['./demo10-form-group.component.css']
})
export class Demo10FormGroupComponent implements OnInit {
  registerForm: FormGroup;
  certs: Certificate[];
  roles: Role[];

  constructor(
    private formBuilder: FormBuilder,
    private certificateService: CertificateService,
    private roleService: RoleService
  ){ }

  ngOnInit() {

    this.certs = this.certificateService.findAll();
    this.roles = this.roleService.findAll();
    this.registerForm = this.formBuilder.group({
      id: 1,
      username: ['', [ // add validation rules
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$')
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      ]],
      description: '',
      address: this.formBuilder.group(
        {
          street: '',
          ward: '' 
        }
      ),
      status: true,
      gender: 'male',
      cert: '2',
      role: 2,
      website: ['', [
        Validators.pattern(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)
      ]],
      age: [18, [
        min(18)
      ]]
    })
  }

  save(){
    let account: Account = this.registerForm.value;
    console.log(account);
    
  }
}
