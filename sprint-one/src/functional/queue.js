var Queue = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;
  var dequeuedStr;

  someInstance.enqueue = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    dequeuedStr = storage[1];
    if (dequeuedStr === undefined) {
      return null;
    }
    delete storage[1];
    index--;
    if (index > 0) {
      for (var i = 1; i <= index; i++) {
        storage[i] = storage[i + 1];
      }
    }
    return dequeuedStr;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
