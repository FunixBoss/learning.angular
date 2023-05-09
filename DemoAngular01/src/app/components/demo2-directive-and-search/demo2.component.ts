import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.models";

@Component({
    selector: 'app-root',
    templateUrl: './demo2.component.html'
})

export class Demo2Component implements OnInit {

    product: Product;
    names: string[];
    status: boolean;
    products: Product[];
    result: Product[];

    minPrice: string;
    maxPrice: string;

    // tự động chạy khi gọi component
    ngOnInit(): void {
        this.product = {
            id: 1, 
            name: 'Name 1', 
            photo: 'product1_1.jpg',
            price: 3,
            quantity: 2,
        }

        this.names = [
            'Name1', 'Name2','Name3','Name4','Name5','Name6',
        ]

        this.products = [
            {
                id: 1, 
                name: 'Name 1', 
                photo: 'product1_1.jpg',
                price: 3,
                quantity: 5,
            },
            {
                id: 2, 
                name: 'Name 2', 
                photo: 'product2_1.jpg',
                price: 3,
                quantity: 6,
            },
            {
                id: 3, 
                name: 'Name 3', 
                photo: 'product3_1.jpg',
                price: 3,
                quantity: 7,
            },
            {
                id: 4, 
                name: 'Name 4', 
                photo: 'product4_1.jpg',
                price: 3,
                quantity: 8,
            },
            {
                id: 5, 
                name: 'Name 5', 
                photo: 'product5_1.jpg',
                price: 3,
                quantity: 9,
            }
        ]

        this.result = this.products;

        this.status = true;
    }

    search(event: any) {
        var keyword = event.target.value.toString();
        if(keyword.length > 0) {
            this.result = []
            this.products.forEach(product => {
                if(product.name.includes(keyword)) {
                    this.result.push(product)
                }
            });
        } else {
            this.result  = this.products
        }

    }

    searchByPrices(){
        var min = parseFloat(this.minPrice);
        var max = parseFloat(this.maxPrice);
        this.result = []
        this.products.forEach(product => {
            if(product.price >= min && product.price <= max) {
                this.result.push(product)
            } else {
                this.result = this.products
            }
        });
    }
}