var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  return Object.keys(this._storage).includes(item);
};

setPrototype.remove = function(item) {
  if (this._storage[item] === undefined) {
    return 'Element does not exist';
  }
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
