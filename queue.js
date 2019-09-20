// Queues - FIFO

function Queue() {
  let collection = [];

  // Just print out the entire array.
  this.print = function() {
    console.log(collection);
  };

  // Push element to the end of the array.
  this.enqueue = function(element) {
    collection.push(element);
  };
  // Take off the first item off the array.
  this.dequeue = function(element) {
    return collection.shift();
  };

  // Show the first element in the array.
  this.front = function() {
    return collection[0];
  };
  // return the size of the array.
  this.size = function() {
    return collection.length;
  };

  // is the array empty? true/false
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

let q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
