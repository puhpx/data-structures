var BinarySearchTree = function(value) {
  var BST = {};
  BST.value = value;
  BST.left = null;
  BST.right = null;
  _.extend(BST, BSTMethods);
  return BST;
};

var BSTMethods = {};

BSTMethods.insert = function(val) {
  var newTree = BinarySearchTree(val);
  if (!this.root) {
    this.root = newTree;
    return;
  }
  var current = this.root;
  while (true) {
    if (val === current.value) {
      return 'Wrong Input';
    }
    if (val < current.value) {
      if (!current.left) {
        current.left = newTree;
        return;
      } else {
        current = current.left;
      }
    } else {
      if (!current.right) {
        current.right = newTree;
        return;
      } else {
        current = current.right;
      }
    }
  }
};

BSTMethods.contains = function(target) {

};

BSTMethods.depthFirstLog = function() {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
