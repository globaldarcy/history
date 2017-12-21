import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicesService} from '../../services.service';
import * as WatchJS from 'melanke-watchjs/src/watch.js';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  public leftList;
  private _length: number;
  @Input() list: any = [];

  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  constructor(private service: ServicesService) {
    this.leftList = this.service.leftLists;
  }

  add(html) {
    this._length = this.leftList.length + 1;
    this.leftList.push({
      id: `left-${this._length}`,
      name: '这是一条信息'
    });
    this.list.push({
      id: `left-${this._length}`,
      name: '这是一条信息'
    });
    this.change.emit(this.list);
    /*console.log(this.leftList);
    this.leftList.map((_list) => {
      WatchJS.watch(_list, 'id', function () {
        console.log('attr1 changed!');
        console.log(_list.id);
      });
    });*/
    console.log(this.list);
  }

  ngOnInit() {
  }

}
