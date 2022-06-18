var DoublyLinkedList = function() {
  var list = {};
  list._head = null;
  list._tail = null;
  // list._next = null;
  // list._prev = null;


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
      var oldTail = lastNode;
      list._tail = Node(value);
      lastNode.next = list._tail;
      list._tail.prev = oldTail;
    }
  };

  list._addToHead = function(value) {
    if (!list._head) {
      list._head = list._tail = Node(value);
    } else {
      var oldHead = list._head;
      list._head = Node(value);
      list._head.next = oldHead;
      oldHead.prev = list._head;
    }
  };


  list._removeHead = function() {
    if (!list._head) {
      return 'List is Empty';
    } else {
      var rmvdHead = list._head;
      if (list._head === list._tail) {
        list._head = list._tail = null;
      } else {
        var newHead = list._head.next;
        list._head = newHead;
        list._head.prev = null;
      }
      return rmvdHead.value;
    }
  };

  list._removeTail = function() {
    if (!list._head) {
      return 'List is Empty';
    } else {
      var rmvdTail = list._tail;
      if (list._head === list._tail) {
        list._head = list._tail = null;
      } else {
        var newTail = list._tail.prev;
        list._tail = newTail;
        list._tail.next = null;
      }
      return rmvdTail.value;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
