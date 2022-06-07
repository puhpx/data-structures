var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.queueCount = 0;
  newQueue.queueFront = 1;
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.queueCount++;
    this.storage[this.queueCount] = value;
  },
  dequeue: function() {
    if (this.count > 0) {
      this.count--;
      this.queueFront++;
      return this.storage[this.queueFront - 1];
    }
  },
  size: function() {
    return this.count;
  }
};


