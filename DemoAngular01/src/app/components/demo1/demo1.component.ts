import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo1.component.html'
    

})

export class Demo1Component implements OnInit {

    // plain text show
    id: number;
    username: string;
    status: boolean;
    phone: any; // ko cần khai báo trc data type

    // html 
    border: number;
    width: number;
    color: string;

    // 
    imgSrc: string;

    // tự động chạy khi gọi component
    ngOnInit(): void {
        this.id = 123;
        this.username = 'acc1';
        this.status = true;
        this.phone = '12343';

        this.border = 3;
        this.width = 400;
        this.color = 'red';   

        this.imgSrc = 'product1_1.jpg'
    }

}