var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = list.tail = Node(value);
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      // var prevNode = list.tail;
      // list.tail = Node(value);
      // prevNode.next = list.tail;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var rmvdHead = list.head;
      list.head = list.head.next;
      return rmvdHead.value;
    }
  };

  list.contains = function(target) {
    var i = list.head;
    while (i) {
      if (i.value === target) {
        return true;
      } else {
        i = i.next;
      }
    }
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
