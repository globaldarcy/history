import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicesService} from '../../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() all = [];
  @Input() count: number;
  @Input() currentIndex: number;

  constructor() {
    // this.currentCount = this.count - 1;
  }

  // Undo start


  undo() {
    console.log(this.currentIndex);
    if (this.canUndo) {
      console.log(this.all[--this.currentIndex]);
    }
  }

  redo() {
    console.log(this.currentIndex);
    if (this.canRedo) {
      console.log(this.all[++this.currentIndex]);
    }
  }

  public get canUndo() {
    return this.currentIndex > 0;
  }

  public get canRedo() {
    return this.currentIndex < this.all.length - 1;
  }

  // Undo end

  ngOnInit() {
    // this.currentIndex  = this.count;
  }

}
