import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // giống như 1 thẻ, app-root là tên thẻ, khi cái nào gọi thẻ này thì load cái template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// khi làm xong thì load cái templateUrl
export class AppComponent {
  title = 'DemoAngular';
}
