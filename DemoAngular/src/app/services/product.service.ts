import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  find() : Product {
    return {
      id: 1,
      name: 'Product1',
      photo: 'product1_1.jpg',
      price: 4.5,
      quantity: 2,
      category: "Category 1"
    }
  }

  findById(id: number): Product {
    let products: Product[] = this.findAll();
    for(let product of products) {
      if(product.id == id) {
        return product;
      }
    }
    return null;
  }

  findByCategory(categoryName: string): Product[] {
    let products: Product[] = this.findAll();
    let results: Product[] = []
    for(let product of products) {
      if(product.category.toLowerCase() == categoryName) {
        results.push(product);
      }
    }
    return results;
  }

  searchByKeyword(keyword: string): Product[] {
    let products: Product[] = this.findAll();
    let results: Product[] = []
    for(let product of products) {
      if(product.name.includes(keyword)) {
        results.push(product);
      }
    }
    return results;


  }

  findAll() : Product[] {
    return [{
        id: 1,
        name: 'Product1',
        photo: 'product1_1.jpg',
        price: 4.5,
        quantity: 2,
        category: "Category 1"
      },
      {
        id: 2,
        name: 'Product2',
        photo: 'product2_1.jpg',
        price: 4.5,
        quantity: 2,
        category: "Category 2"
      },
      {
        id: 3,
        name: 'Product3',
        photo: 'product3_1.jpg',
        price: 4.5,
        quantity: 2,
        category: "Category 2"
      },
      {
        id: 4,
        name: 'Product4',
        photo: 'product4_1.jpg',
        price: 4.5,
        quantity: 2,
        category: "Category 3"
      },
      {
        id: 5,
        name: 'Product5',
        photo: 'product5_1.jpg',
        price: 4.5,
        quantity: 2,
        category: "Category 3"
      },
    ]
  }

}
