import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! hoge';
  demoData: any = [
    {name: "山田", age: 24}
    ,{name: "tanaka", age: 28}
    ,{name: "sato", age: 36}
  ]
}
