var Tree = function(value) {
  var newTree = {};
  newTree._value = value;
  newTree._parent = null;
  newTree._children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods._addChild = function(value) {
  //create a new node using Tree function
  var newNode = Tree(value);
  //push the new node into our children array with keyword this
  newNode._parent = this;
  this._children.push(newNode);
};

// treeMethods._removeFromParent = function(value, parentValue) {
//   if (!this._contains(value) || !this._parent) {
//     return undefined;
//   }

// };

treeMethods._contains = function(target) {
  if (this._value === target) {
    return true;
  }
  if (this._children.length > 0) {
    for (var i = 0; i < this._children.length; i++) {
      if (this._children[i]._contains(target)) {
        return true;
      }
    }
  }
  return false;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
