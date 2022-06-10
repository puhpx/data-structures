var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return null;
  }
  var poppedStr = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return poppedStr;
};

Stack.prototype.size = function() {
  return this.index;
};

var newStack = new Stack;
