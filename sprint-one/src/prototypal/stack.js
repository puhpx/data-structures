var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.index = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.index++;
  this.storage[this.index] = value;
};

stackMethods.pop = function() {
  if (this.index === 0) {
    return null;
  }
  var poppedStr = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  return poppedStr;
};

stackMethods.size = function() {
  return this.index;
};
