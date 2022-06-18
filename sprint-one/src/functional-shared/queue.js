var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.index = 0;
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

queueMethods.enqueue = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

queueMethods.dequeue = function() {
  var dequeuedStr = this.storage[1];
  if (dequeuedStr === undefined) {
    return null;
  }
  delete this.storage[1];
  this.index--;
  if (this.index > 0) {
    for (var i = 1; i <= this.index; i++) {
      this.storage[i] = this.storage[i + 1];
    }
  }
  return dequeuedStr;
};

queueMethods.size = function() {
  return this.index;
};