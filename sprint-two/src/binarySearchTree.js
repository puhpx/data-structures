var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, BSTMethods);
  return newTree;
};

var BSTMethods = {

  insert: function(val) {
    var node = BinarySearchTree(val);

    if (!this.value) {
      this.value = val;
      return this;
    }

    var current = this;

    while (true) {
      if (val === current.value) {
        return undefined;
      }
      if (val < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  },

  contains: function(val) {
    if (!this.value) {
      return false;
    }

    var current = this;

    while (true) {
      if (val === current.value) {
        return true;
      }
      if (val < current.value) {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
  },

  depthFirstLog: function(cb) {
    var insideFunc = function (tree) {
      cb(tree.value);
      if (tree.left) {
        insideFunc(tree.left);
      }
      if (tree.right) {
        insideFunc(tree.right);
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
