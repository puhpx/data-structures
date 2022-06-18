

// Instantiate a new graph
var Graph = function() {
  this._nodes = [];
  this._edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype._addNode = function(node) {
  this._nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype._contains = function(node) {
  return this._nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype._removeNode = function(node) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (this._nodes[i] === node) {
      this._nodes.splice(i);
      this._removeEdge(node);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype._hasEdge = function(fromNode, toNode) {
  for (var j = 0; j < this._edges.length; j++) {
    var nodeEdge = this._edges[j];
    if (_.contains(nodeEdge, fromNode) && _.contains(nodeEdge, toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype._addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  this._edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype._removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this._edges.length; i++) {
    var nodeEdge = this._edges[i];
    if (_.contains(nodeEdge, fromNode) && _.contains(nodeEdge, toNode)) {
      this._edges.splice(i);
    } else {
      if (_.contains(nodeEdge, fromNode) && toNode === undefined) {
        this._edges.splice(i);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype._forEachNode = function(cb) {
  _.each(this._nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


