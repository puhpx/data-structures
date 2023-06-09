

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  if (this._storage.length >= (0.75 * this._limit)) {
    this._limit = this._limit * 2;
  }
};

HashTable.prototype._insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (!this._storage[index]) {
    bucket = [];
    this._storage[index] = bucket;
  }

  var kFound = false;

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        kFound = true;
      }
    }
  }
  if (!kFound) {
    bucket.push([k, v]);
  }

};

HashTable.prototype._retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[index];
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype._remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


