import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css']
})

export class Demo5Component implements OnInit{

  category: Category;
  categories: Category[];
  

  ngOnInit(): void {
      this.categories = [
        {id: 1, name: "cateA"},
        {id: 2, name: "cateB"},
        {id: 3, name: "cateC"}
      ]
  }

  selectCategory(event: any) {
    var id = parseInt(event.target.value);
    this.categories.some(cate => {
      if(cate.id == id) {
        this.category = cate;
        return true;
      } 
      return false;
    })
  }
}
