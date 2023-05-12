import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './demo3.component.html'
})

export class Demo3Component implements OnInit {

    width: string; 
    height: string;
    mainImgSrc: string;
    subImageSrcs: string[];

    constructor() {
        
    }
    ngOnInit(): void {
        this.width = '300';
        this.height = '300';
        this.mainImgSrc = 'assets/images/product1_1.jpg'
        this.subImageSrcs = [
            'assets/images/product1_1.jpg',
            'assets/images/product2_1.jpg',
            'assets/images/product3_1.jpg'
        ]
    }

    clickMe() {
        alert("Hello world!")
    }

    changeBg(event : any) {
        var value = event.target.value;
        document.bgColor = value
    }

    resize(event: any) {
        var value = event.target.value.split('x');
        this.width = value[0]
        this.height = value[1]
    }

    changeMainImg(event: any) {
        this.mainImgSrc = event.target.src
    }
}