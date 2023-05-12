import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  findAll() : Category[] {
    return [
      {
        id: 1,
        name: "category 1"
      },
      {
        id: 2,
        name: "category 2"
      },
      {
        id: 2,
        name: "category 3"
      }

    ]
  }
}
