class Stack {

  constructor() {
    this.storage = {};
    this.index = 0;
  }

  push(value) {
    this.index++;
    this.storage[this.index] = value;
  }

  pop() {
    if (this.index === 0) {
      return null;
    }
    var poppedStr = this.storage[this.index];
    delete this.storage[this.index];
    this.index--;
    return poppedStr;
  }

  size() {
    return this.index;
  }

}

var newStack = new Stack;
