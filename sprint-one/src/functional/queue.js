var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var queueCount = 0;
  var queueFront = 1;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueCount++;
    count++;
    storage[queueCount] = value;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      count--;
      queueFront++;
      return storage[queueFront - 1];
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
