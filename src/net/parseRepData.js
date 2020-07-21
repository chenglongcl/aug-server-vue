export class ParseRepData {
  constructor(handlers) {
    this.msgTypes = {}
    this.handlers = {}
    this._registerHandlers(handlers)
  }
  _registerHandlers(handlers) {
    for (let arr of handlers) {
      this.msgTypes[arr.msgName] = arr.msg
      this.handlers[arr.msgName] = arr.handler
    }
  }
  // decode protobuf bytes
  decodeData(msgName, message) {
    let self = this
    // try decode
    try {
      if (message instanceof Blob) {
        let fileReader = new FileReader();
        fileReader.onload = function () {
          let arrayBuffer = this.result;
          self.bufferToCall(msgName, arrayBuffer);
        };
        fileReader.readAsArrayBuffer(message);
      } else {
        this.bufferToCall(msgName, message);
      }
    } catch (error) {
      console.warn("decode msg error, ", error);
    }
  }
  bufferToCall(msgName, arrayBuffer) {
    let pkgData = new Uint8Array(arrayBuffer);
    // msg body content
    let body = pkgData.subarray(0, pkgData.length);
    let decodedData = this.msgTypes[msgName].decode(body);
    let call = this.handlers[msgName];
    if (call) {
      call(decodedData);
    } else {
      console.warn("Unhandle msgName->", msgName);
      console.warn("received unhandle message->", decodedData);
    }
  }
}
