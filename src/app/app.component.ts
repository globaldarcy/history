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
    /*let ex1 = {
      attr1: 'initial value of attr1',
      attr2: 'initial value of attr2'
    };
    WatchJS.watch(ex1, 'attr1', function () {
      console.log('attr1 changed!');
      console.log(ex1.attr1);
    });
    ex1.attr1 = 'other value';*/


    /*let obj = {
      phrase: 'hey',
      name: 'buddy',
      alert: function () {
        console.log(obj.phrase + ' ' + obj.name);
      },
      alert2: function () {
        console.log(obj.name + ', ' + obj.phrase);
      }
    };

    WatchJS.watch(obj, 'name', obj.alert);
    WatchJS.watch(obj, 'name', obj.alert2);

    obj.name = 'johnny';

    WatchJS.unwatch(obj, 'name', obj.alert);

    obj.name = 'phil';​*/

// defining our object however we like
    let ex1 = {
      attr1: "inicial value of attr1",
      attr2: "initial value of attr2"
    };

// defining a 'watcher' for an attribute
    WatchJS.watch(ex1, "attr1", function(){
      WatchJS.noMore = true; // prevent invoking watcher in this scope
      ex1.attr2 = ex1.attr1 + " + 1";
    });

// defining other 'watcher' for another attribute
    WatchJS.watch(ex1, "attr2", function(){
      console.log("attr2 changed");
    });

    ex1.attr1 = "other value to 1"; // attr1 will be changed but will not invoke the attr2`s watcher























  }

  constructor() {
    // this.allCount = this.allLists.length;
  }
}

