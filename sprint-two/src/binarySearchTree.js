var BinarySearchTree = function(value) {
  var newTree = {};
  newTree._value = value;
  newTree._left = null;
  newTree._right = null;
  _.extend(newTree, BSTMethods);
  return newTree;
};

var BSTMethods = {

  _insert: function(val) {
    var node = BinarySearchTree(val);

    if (!this._value) {
      this._value = val;
      return this;
    }

    var current = this;

    while (true) {
      if (val === current._value) {
        return undefined;
      }
      if (val < current._value) {
        if (!current._left) {
          current._left = node;
          return this;
        } else {
          current = current._left;
        }
      } else if (val > current._value) {
        if (!current._right) {
          current._right = node;
          return this;
        } else {
          current = current._right;
        }
      }
    }
  },

  _contains: function(val) {
    if (!this._value) {
      return false;
    }

    var current = this;

    while (true) {
      if (val === current._value) {
        return true;
      }
      if (val < current._value) {
        if (!current._left) {
          return false;
        } else {
          current = current._left;
        }
      } else if (val > current._value) {
        if (!current._right) {
          return false;
        } else {
          current = current._right;
        }
      }
    }
  },

  _depthFirstLog: function(cb) {
    var insideFunc = function (tree) {
      cb(tree._value);
      if (tree._left) {
        insideFunc(tree._left);
      }
      if (tree._right) {
        insideFunc(tree._right);
      }
    };
    insideFunc(this);
  }
};

//  .insert() method, which accepts a value and places it in the tree in the correct position.
//  .contains() method, which accepts a value and returns a boolean       reflecting whether or not the value is contained in the tree.
//  .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.

/*
 * Complexity: What is the time complexity of the above functions?
 */
