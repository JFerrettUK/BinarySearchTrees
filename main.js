class Tree {
    constructor() {
        this.root = null
        this.size = 0;
    }
    
    buildTree  = function(array, start = 0, end = array.length - 1) {
        if (start > end) {
            return null;
        }
    
        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(array[mid]);
        root.left = this.buildTree(array, start, mid-1);
        root.right = this.buildTree(array, mid+1, end);
        testTree.size++
    
        return root;
    }

    insert = function(insert) {
        this.root = this.recursionInsert(this.root, insert);
    }

    recursionInsert = function(root, insert) {
        if (root == null) {
            root = new TreeNode(insert);
            return root;
        } 
        
        if (insert < root.data) {
            root.left = this.recursionInsert(root.left, insert)
        } else if (insert > root.data) {
            root.right = this.recursionInsert(root.right, insert)
        }
        return root
    }

    delete = function(remove) {
        this.root = this.recursionDelete(this.root, remove);
    }

    recursionDelete = function(root, remove) {
        if (root == null) {
            return root
        }

        if (root > remove) {
            this.recursionDelete(root.left)

        }
        return root

    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let testTree = new Tree;
testTree.root = testTree.buildTree(array, 0, array.length - 1);

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

testTree.insert(10);
testTree.delete(10);
prettyPrint(testTree.root);
