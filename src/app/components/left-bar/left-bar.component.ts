import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicesService} from '../../services.service';

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

  add() {
    this._length = this.leftList.length + 1;
    this.leftList.push({
      id: `left-${this._length}`,
      name: '这是一条信息'
    });
    this.list.push({
      id: `left-${this._length}`
    });
    this.change.emit(this.list);
  }

  ngOnInit() {
  }

}
