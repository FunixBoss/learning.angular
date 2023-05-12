import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() { }

  findAll() {
    return [
      {id: 1, name: "Cert 1"},
      {id: 2, name: "Cert 2"},
      {id: 3, name: "Cert 3"},
      {id: 4, name: "Cert 4"},
    ]
  }
}
