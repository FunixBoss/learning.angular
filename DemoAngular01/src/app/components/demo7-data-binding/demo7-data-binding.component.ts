import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo7-data-binding.component.html',
  styleUrls: ['./demo7-data-binding.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class Demo7DataBindingComponent implements OnInit{

  msg1_one_way: string; 
  msg2_two_way: string;

  msg_login: string;
  username: string;
  password: string;

  ngOnInit(): void {
    this.msg1_one_way = "first message";
    this.msg2_two_way = "second message";
    this.msg_login = "";
  }

  login () {
    if(this.username == 'abc' && this.password == "123") {
      this.msg_login = "<span class='valid'>Valid!</span>";
    } else {
      this.msg_login = "<span class='invalid'>Invalid!</span>";
    }
  }
  

  
}
