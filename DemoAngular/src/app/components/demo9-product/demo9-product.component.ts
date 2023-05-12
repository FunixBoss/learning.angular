import { Component, OnChanges, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.models';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './demo9-product.component.html',
  styleUrls: ['./demo9-product.component.css']
})
export class Demo9ProductComponent implements OnInit{

  product: Product;
  products: Product[];
  categories: Category[];
  constructor (
    private productService: ProductService,
    private categoryService: CategoryService  
  ){

  }
  ngOnInit(): void {
    this.product = this.productService.find();
    this.products = this.productService.findAll();
    this.categories = this.categoryService.findAll();
  }

  getDetails(id: any): void {
    let productId: number = parseInt(id);
    this.product = this.productService.findById(productId);
  }

  searchByCategory(event: any): void {
    let category = event.target.value;
    if(category == 'all') {
      this.products = this.productService.findAll();
    } else {
      this.products = this.productService.findByCategory(category);
    }
  }

  searchByKeyword(event: any){
    this.products = this.productService.searchByKeyword(event.target.value);
  }
}
