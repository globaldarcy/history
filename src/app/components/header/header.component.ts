import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {

  @Input() all = []
  @Input() count: number;
  private _stackArray: Array<any> = this.all;
  private _currentIndex: number;
  constructor() {
  }
  // Undo start

  undo() {
    this._currentIndex = this.all.length - 1;
    console.log(this._currentIndex);
    if (this.canUndo) {
      console.log(this.all[--this._currentIndex]);
    }
  }

  redo() {
    this._currentIndex = this.all.length - 1;
    console.log(this._currentIndex);
    if (this.canRedo) {
      console.log(this.all[++this._currentIndex]);
    }
  }

  public get canUndo() {
    return this._currentIndex > 0;
  }

  public get canRedo() {
    return this._currentIndex < this.all.length;
  }
  // Undo end

  ngOnInit() {
  }

}
