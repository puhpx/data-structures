var Stack = function() {
  var someInstance = {};
  var storage = {};
  var index = 0;
  var poppedStr;

  someInstance.push = function(value) {
    index++;
    storage[index] = value;
  };

  someInstance.pop = function() {
    if (index === 0) {
      return null;
    }
    poppedStr = storage[index];
    delete storage[index];
    index--;
    return poppedStr;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
