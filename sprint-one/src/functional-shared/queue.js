var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.queueFront = 1;
  newQueue.queueCount = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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


