const Stack = require('./Stack');

/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/
class Queue {
  constructor() {
    this.storageIn = new Stack();
    this.storageOut = new Stack();
  }
  get size() {
    return this.storageIn.size + this.storageOut.size;
  }
  enqueue(value) {
    this.storageIn.push(value);
  }
  dequeue() {
    if (this.storageOut.size === 0) {
      while (this.storageIn.size > 0) {
        this.storageOut.push(this.storageIn.pop());
      }
    }
    // return this.storageOut.pop();
    return this.size ? this.storageOut.pop() : undefined;
  }
}

module.exports = Queue;
