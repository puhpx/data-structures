var LinkedList = function() {
  var list = {};
  list._head = null;
  list._tail = null;

  list._addToTail = function(value) {
    //if there is no head, then head would be tail
    if (!list._head) {
      list._head = list._tail = Node(value);
      // list.head = Node(value);
    } else {
      var lastNode = list._head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      list._tail = Node(value);
      lastNode.next = list._tail;
    }
    //if head exists, add new node
  };

  list._removeHead = function() {
    if (!list._head) {
      return 'List is Empty';
    } else {
      var rmvdHead = list._head;
      var newHead = list._head.next;
      list._head = newHead;
      return rmvdHead.value;

    }
  };

  list._contains = function(target) {
    // if (!list.head) {
    //   return;
    // }
    var temp = list._head;
    while (temp) {
      if (temp.value === target) { //needed temp.value
        return true;
      } else {
        temp = temp.next;
      }

    }
    //start with head
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
