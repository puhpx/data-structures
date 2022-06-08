class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
      return this.storage[this.count + 1];
    }
  }

  size() {
    return this.count;
  }
}