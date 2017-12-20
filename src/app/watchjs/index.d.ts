declare module 'melanke-watchjs' {
  /*export class WatchJs {
    static watch();
    static unwatch();
    noMore: false;
  }*/

  const WatchJS = {
    noMore: false,        // use WatchJS.suspend(obj) instead
    useDirtyCheck: false, // use only dirty checking to track changes.
    watch : watch,
    unwatch : unwatch,
    callWatchers : callWatchers,
    suspend : suspend, // suspend watchers
    onChange : trackChange,  // track changes made to object or  it's property and return a single change object
  };
  export = WatchJS;


}


