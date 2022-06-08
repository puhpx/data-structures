var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.queueCount = 0;
  this.queueFront = 1;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.queueCount++;
  this.storage[this.queueCount] = value;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
    this.queueFront++;
    return this.storage[this.queueFront - 1];
  }
};

Queue.prototype.size = function() {
  return this.count;
};


