import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.models";

@Component({
    selector: 'app-root',
    templateUrl: './demo4.component.html'
})

export class Demo4Component implements OnInit {

    fDegree: number;
    names: string[];
    result: string[];

    ngOnInit(): void {
        this.fDegree = 0;

        this.names = [
            'Kevin', 
            'Peter',
            'Mary'
        ]

        this.result = this.names;
    }

    display(event: any){
        console.log(event.target.value)
        
    }

    displayEnter(event: any){
        console.log(event.target.value)
        
    }

    changeTemp(event: any) {
        var cDegree = parseFloat(event.target.value);
        this.fDegree = cDegree*1.8 + 32;
    }
    
    search(event: any) {
        var keyword = event.target.value.toString();
        if(keyword.length > 0) {
            this.result = []
            this.names.forEach(name => {
                if(name.indexOf(keyword) > -1) {
                    this.result.push(name)
                }
            });
        } else {
            this.result  = this.names
        }

    }
}