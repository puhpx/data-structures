var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if there is no head, then head would be tail
    if (!list.head) {
      list.head = list.tail = Node(value);
      // list.head = Node(value);
    } else {
      var lastNode = list.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      list.tail = Node(value);
      lastNode.next = list.tail;
    }
    //if head exists, add new node
  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    } else {
      var rmvdHead = list.head;
      var newHead = list.head.next;
      list.head = newHead;
      return rmvdHead.value;

    }
  };

  list.contains = function(target) {
    // if (!list.head) {
    //   return;
    // }
    var temp = list.head;
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
