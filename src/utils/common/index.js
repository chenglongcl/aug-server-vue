import Vue from "vue"

export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
  })
}

export function chineseUnit(value, currency) {
  let data;
  let obj = {
    symbol: currency || "",
    int: undefined, //整数位  
    dec: undefined, //小数位 
    targ: "", //正负 
    times: ["", "万", "亿", "万亿", "亿亿"]
  }
  value = String(value);
  let reg = /^[1-9]\d*$/;
  if (!reg.test(value)) {
    return 0
  }
  if (value[0] == "-") {
    obj.targ = "-";
    value = value.substring(1, value.length)
  }
  let times = 0;
  value = Number(value);
  while (value > 10000) {
    value = value / 10000;
    times++;
  }
  let arr = String(value).split(".")
  obj.dec = arr[1];
  obj.int = arr[0];
  // 保留3位有效数字的判断
  if (obj.int.length === 3 || obj.dec == undefined) {
    data = obj.symbol + obj.targ + obj.int + obj.times[times];
  } else {
    let num = obj.dec.slice(0, 3 - obj.int.length)
    data = obj.symbol + obj.targ + obj.int + '.' + num + obj.times[times];
  }
  return data
}
