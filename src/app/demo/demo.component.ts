import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  objeto = {};

  power = 10;

  ngOnInit() {
    // code of initialization, here we can add rest api calls
  }

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
