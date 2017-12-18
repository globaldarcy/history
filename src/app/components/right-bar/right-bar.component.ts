import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent implements OnInit {

  private leftList;
  private _length: number;
  @Input() list: any = [];

  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  constructor(private service: ServicesService) {
    this.leftList = this.service.rightLists;
  }

  add() {
    this._length  = this.leftList.length + 1;
    this.leftList.push({
      id: `right-${this._length}`,
      name: '这是一条new信息'
    });
    this.list.push({
      id: `right-${this._length}`
    });
    this.change.emit(this.list);
  }
  ngOnInit() {
  }
}
