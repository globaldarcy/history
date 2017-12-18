import {Component} from '@angular/core';

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
  }
  constructor() {
    this.allCount = this.allLists.length;
  }

}
