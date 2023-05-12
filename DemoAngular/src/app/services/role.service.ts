import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  findAll() {
    return [
      {id: 1, name: "Role 1"},
      {id: 2, name: "Role 2"},
      {id: 3, name: "Role 3"},
      {id: 4, name: "Role 4"},
    ]
  }
}
