import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-demo-3b',
    templateUrl: './demo3b.component.html'
})

export class Demo3BComponent implements OnInit {

    @Input() childWidth: string; 
    @Input() childHeight: string;

    constructor() {
    
    }
    ngOnInit(): void {
        
    }
}