import {
    Apis
  } from 'bitsharesjs-ws';
  import EventEmitter from 'events';
  
  class BitShares extends EventEmitter {
    constructor(node) {
      super();
      this.node = node;
    }
    async connect() {
  
      this.subscription = Apis.instance(this.node, true).init_promise.then(() =>{       
          return Apis.instance(); 
      });
      return this.subscription;
    }
  }
  export default BitShares;
  