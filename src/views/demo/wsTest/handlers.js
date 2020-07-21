import {
  msg
} from "@/net/bundle";
import {
  ParseRepData
} from "@/net/parseRepData";

export class Handlers {
  constructor(vm) {
    this._vm = vm
    this.parseRepData = new ParseRepData(this.initHandlers())
  }
  initHandlers() {
    return [{
      msgName: "SCPong",
      msg: msg.SCPong,
      handler: (decodedMsg) => {
        console.log(decodedMsg)
      }
    }, {
      msgName: "SCUserLogin",
      msg: msg.SCUserLogin,
      handler: (decodedMsg) => {
        console.log(decodedMsg)
      }
    }, {
      msgName: "SCBroadcastMultiple",
      msg: msg.SCBroadcastMultiple,
      handler: (decodedMsg) => {
        console.log(decodedMsg)
      }
    }]
  }
}
export default Handlers
