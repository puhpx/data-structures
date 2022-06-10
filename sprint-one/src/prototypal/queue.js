var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.index = 0;
  return newQueue;
};

var queueMethods = {};

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
      this.storage[i] = this.storage[i+1];
    }
  }
  return dequeuedStr;
};

queueMethods.size = function() {
  return this.index;
}


