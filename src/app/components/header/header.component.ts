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
  private foo: any = [];

  constructor(private servicesService: ServicesService) {
    /*if (this.currentIndex === -1) {
      this.currentIndex = 0;
    }*/
  }

  // Undo start

  undo() {
    if (this.canUndo) {
      if (this.servicesService.leftLists[this.servicesService.leftLists.length - 1].id === this.all[this.currentIndex].id) {
        this.servicesService.leftLists.pop();
        this.foo.push(this.all.pop());
      } else if (this.servicesService.rightLists[this.servicesService.rightLists.length - 1].id === this.all[this.currentIndex].id) {
        this.servicesService.rightLists.pop();
        this.foo.push(this.all.pop());
      }
      console.log(this.all);
      console.log(this.foo);
    }
  }
  redo() {
    if (this.canRedo) {
      let reObj = this.foo.pop();
      if (/^left-/.test(reObj.id)) {
        this.servicesService.leftLists.push(reObj);
      } else if (/^right-/.test(reObj.id)) {
        this.servicesService.rightLists.push(reObj);
      }
      this.all.push(reObj);
      console.log(this.foo);
    }
  }

  public get canUndo() {
    return this.currentIndex >= 0;
  }

  public get canRedo() {
    return this.foo.length > 0;
  }

  // Undo end

  ngOnInit() {
  }

}
