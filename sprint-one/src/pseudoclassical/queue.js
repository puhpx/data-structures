var Queue = function() {
  this.storage = {};
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.index;
};

var newQueue = new Queue;