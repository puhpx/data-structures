describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree._addChild).to.be.a('function');
    expect(tree._contains).to.be.a('function');
    expect(tree.hasOwnProperty('_value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree._addChild(5);
    expect(tree._children[0]._value).to.equal(5);
  });

  it('should add child contains same value to the tree', function() {
    tree._addChild(5);
    tree._addChild(5);
    expect(tree._children[1]._value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree._addChild(5);
    expect(tree._contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree._addChild(5);
    expect(tree._contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree._addChild(5);
    tree._children[0]._addChild(6);
    expect(tree._children[0]._children[0]._value).to.equal(6);
  });

  it('should be able to return parent node', function() {
    tree._addChild(5);
    tree._children[0]._addChild(6);
    expect(tree._children[0]._children[0]._parent._value).to.equal(5);
  });

  it('should correctly detect nested children', function() {
    tree._addChild(5);
    tree._addChild(6);
    tree._children[0]._addChild(7);
    tree._children[1]._addChild(8);
    expect(tree._contains(7)).to.equal(true);
    expect(tree._contains(8)).to.equal(true);
  });

});
