// Stack Data Struct
// Using stacks to find palindronmes.

let letters = [];

let word = "amanaplanacanalpanama";

let reverse = "";

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  reverse += letters.pop();
}

if (word == reverse) {
  console.log(word + " is a palindrome!");
} else {
  console.log(word + " is NOT a palindrome!");
}

// Stack class
let Stack = function() {
  // Initialize count to 0 and storage to null.
  this.count = 0;
  this.storage = {};

  // Calling push will push a new value to the end of the stack.
  this.push = value => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Calling pop will remove from the end of the stack and decrement count by one.
  this.pop = () => {
    // Return nothing if there is nothing to pop.
    if (this.count === 0) {
      return undefined;
    }
    // Decrement count of the stack by one.
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // Get the count of objects inside the stack.
  this.size = () => {
    return this.count;
  };
  // Peek at the last object in the stack.
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();

myStack.push("hello");
myStack.push("world");
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
