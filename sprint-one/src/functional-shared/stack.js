var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.index = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

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


