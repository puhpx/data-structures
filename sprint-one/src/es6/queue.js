class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.queueCount = 0;
    this.queueFront = 1;
  }

  enqueue(value) {
    this.count++;
    this.queueCount++;
    this.storage[this.queueCount] = value;
  }

  dequeue() {
    if (this.count > 0) {
      this.count--;
      this.queueFront++;
      return this.storage[this.queueFront - 1];
    }
  }

  size() {
    return this.count;
  }
}
