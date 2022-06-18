describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('_head');
    expect(doublyLinkedList).to.have.property('_tail');
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList._contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList._addToTail(4);
    expect(doublyLinkedList._tail.value).to.equal(4);
    doublyLinkedList._addToTail(5);
    expect(doublyLinkedList._tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList._addToTail(4);
    doublyLinkedList._addToTail(5);
    expect(doublyLinkedList._head.value).to.equal(4);
    doublyLinkedList._removeHead();
    expect(doublyLinkedList._head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList._addToTail(4);
    expect(doublyLinkedList._removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList._addToTail(4);
    doublyLinkedList._addToTail(5);
    expect(doublyLinkedList._contains(4)).to.equal(true);
    expect(doublyLinkedList._contains(5)).to.equal(true);
    expect(doublyLinkedList._contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList._addToTail(4);
    doublyLinkedList._addToTail(5);
    doublyLinkedList._removeHead();
    expect(doublyLinkedList._contains(4)).to.equal(false);
  });

  it('should return "List is Empty" if removeHead is called on empty list', function() {
    expect(doublyLinkedList._removeHead()).to.equal('List is Empty');
  });

  it('should return new head if addToHead is called', function() {
    doublyLinkedList._addToTail(4);
    doublyLinkedList._addToTail(5);
    doublyLinkedList._addToHead(3);
    expect(doublyLinkedList._head.value).to.equal(3);
  });


});