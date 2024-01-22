// inorderTraversal.js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const inorderTraversal = (root) => {
  if (root !== null) {
    inorderTraversal(root.left);
    console.log(root.value);
    inorderTraversal(root.right);
  }
};

const root = new Node(1);
root.left=new Node(2);
root.right=new Node(3);
root.left.left=new Node(4);
root.left.right=new Node(5);
root.right.left=new Node(6);
root.right.right=new Node(7);
inorderTraversal(root);
