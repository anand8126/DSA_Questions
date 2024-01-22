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

const preOrderTraversal = (root) => {
  if (root !== null) {
    console.log(root.value);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
};

const postOrderTraversal = (root) => {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.value);
  }
};

const lengthOfTree = (root) => {
  if (root === null) {
    return 0;
  }
  const leftHeight = lengthOfTree(root.left);
  const rightHeight = lengthOfTree(root.right);

  if(leftHeight > rightHeight){
    return leftHeight +1;
  }
  else {
    return rightHeight +1;
  }
};


const levelOrderTraversal = (root) =>{
  if(root === null){
    return root;
  }

  const ans=[];
  const queue=[root];

  while(queue.length > 0){
    const current =queue.shift();
    ans.push(current.value);

    if(current.left){
      queue.push(current.left);
    }

    if(current.right){
      queue.push(current.right);
    }
  }
  return ans;
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
// inorderTraversal(root);
// preOrderTraversal(root);
// postOrderTraversal(root);
// console.log("The Height of tree ",lengthOfTree(root));
console.log("Leval Order Traversal ",levelOrderTraversal(root));

