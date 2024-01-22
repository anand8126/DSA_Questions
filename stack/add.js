class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  peckElement() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(10);
stack.add(20);
stack.add(30);
stack.add(40);
stack.add(50);
console.log(stack.items);

console.log("Stack is Empty ",stack.clear());

console.log(stack.peckElement());

if (stack.isEmpty) {
  console.log("Is Full Stack");
} else {
  console.log("Stack is empty!");
}
console.log("Remove Element : ", stack.remove());

console.log("Size of Stack ", stack.size());
