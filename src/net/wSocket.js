export class WSocket {
  constructor() {
    this.ws
    this.onMessage
    this.isOpen = false;
    this.onOpen
    this.onErr
    this.onClose
    this.onTimeout
    this._connTimeout = 5000;
    this.dest;
  }
  connect(destTo, reCall) {
    if (!this.onOpen || !this.onMessage) {
      console.warn("wsocket onOpen && onMessage maybe required.");
    }
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      // established
      this.onOpen();
      this.isOpen = true;
      return;
    }
    this.dest = destTo;
    this.ws = new WebSocket(destTo);
    this.ws.onopen = (event) => {
      this.onOpen();
      this.isOpen = true;
      //reconnet call
      if (reCall) {
        reCall();
      }
      //console.log("Send Text WS was opened.");
    };
    this.ws.onmessage = (event) => {
      this.onMessage(event.data);
      //console.log("response text msg: " + event.data);
    };
    this.ws.onerror = (event) => {
      if (this.onErr) {
        this.onErr();
      }
      //console.log("Send Text fired an error");
    };
    this.ws.onclose = (event) => {
      if (this.onClose) {
        this.onClose();
      }
      this.isOpen = false;
      //console.log("WebSocket instance closed.");
    };
    setTimeout(() => {
      if (this.ws.readyState === WebSocket.OPEN) {
        console.log("this.ws.readyState === WebSocket.OPEN");
      } else {
        if (this.onTimeout) {
          this.onTimeout();
        }
        //console.log("WebSocket instance wasn't ready...");
        this.ws.close();
      }
    }, this._connTimeout);
  }
  reConnect(call) {
    if (this.dest) {
      this.connect(this.dest, call);
    } else {
      console.error("you should call connect method first.");
    }
  }
  send(data) {
    if (this.ws.readyState != WebSocket.OPEN) {
      // reconnet and send data
      console.warn("try auto reconnect...");
      this.reConnect(() => {
        this.ws.send(data);
      });
    } else {
      this.ws.send(data);
    }
  }
  close() {
    this.isOpen = false;
    this.ws.close();
  }
  set setTimeout(timeout) {
    this._connTimeout = timeout;
  }
}
