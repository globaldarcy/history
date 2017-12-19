import {Component} from '@angular/core';
import WatchJS from 'melanke-watchjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public allLists: any = [];
  public allCount: number;

  countChange() {
    console.log(this.allLists);
    // console.log(this.allCount);
    let ex1 = {
      attr1: 'initial value of attr1',
      attr2: 'initial value of attr2'
    };
    WatchJS.watch(ex1, 'attr1', function () {
      console.log('attr1 changed!');
      console.log(ex1.attr1);
    });
    ex1.attr1 = 'other value';
  }

  constructor() {
    // this.allCount = this.allLists.length;
  }
}

