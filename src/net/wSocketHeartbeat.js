export class WSocket {
  constructor() {
    this.ws
    this.onMessage
    this.isOpen = false;
    this.onOpen
    this.onErr
    this.onClose
    this.onReconnect
    this.dest;
    this.repeat = 0;
    this.ping
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
      this.repeat = 0;
      this.onOpen();
      this.isOpen = true;
      //心跳检测重置
      this.heartCheck();
    };
    this.ws.onmessage = (event) => {
      this.onMessage(event.data);
      //如果获取到消息，心跳检测重置
      //拿到任何消息都说明当前连接是正常的
      this.heartCheck();
    };
    this.ws.onerror = (event) => {
      if (this.onErr) {
        this.onErr();
      }
      this.reconnect();
    };
    this.ws.onclose = (event) => {
      if (this.onClose) {
        this.onClose();
      }
      this.isOpen = false;
      this.reconnect();
    };
  }
  reconnect() {
    if (this.opts.repeatLimit > 0 && this.opts.repeatLimit <= this.repeat) return; //limit repeat the number
    if (this.lockReconnect || this.forbidReconnect) return;
    this.lockReconnect = true;
    this.repeat++; //必须在lockReconnect之后，避免进行无效计数
    if (this.onReconnect) {
      this.onReconnect();
    }
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(() => {
      this.connect(this.dest);
      this.lockReconnect = false;
    }, this.opts.reconnectTimeout);
  }
  send(data) {
    if (this.ws.readyState == WebSocket.OPEN) {
      this.ws.send(data);
    }
  }
  close() {
    this.isOpen = false;
    //如果手动关闭连接，不再重连
    this.forbidReconnect = true;
    this.heartReset();
    this.ws.close();
  }
  //心跳检测
  heartCheck() {
    this.heartReset();
    this.heartStart();
  }
  heartStart() {
    if (this.forbidReconnect) return; //不再重连就不再执行心跳
    this.pingTimeoutId = setTimeout(() => {
      //这里发送一个心跳，后端收到后，返回一个心跳消息，
      //onmessage拿到返回的心跳就说明连接正常
      this.ping()
      //如果超过一定时间还没重置，说明后端主动断开了
      this.pongTimeoutId = setTimeout(() => {
        //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
        this.ws.close();
      }, this.opts.pongTimeout);
    }, this.opts.pingTimeout);
  }
  heartReset() {
    clearTimeout(this.pingTimeoutId);
    clearTimeout(this.pongTimeoutId);
  }
}
