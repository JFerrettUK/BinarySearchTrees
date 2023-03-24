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
        console.log(root.data + " reached | " + i++ + " delete ran!" + " | remove: " + remove + " " )

        //If no root matches value, return
        if (root == null) {
            return root
        }

        if (remove < root.data) {
            console.log("Traveled left")
            root.left = this.recursionDelete(root.left, remove);
        }
        
        else if (remove > root.data) {
            console.log("Traveled right")
            root.right = this.recursionDelete(root.right, remove);
        }

        else {
            if (root.left == null) {
                return root.right
            }

            else if (root.right == null) {
                return root.left
            }
        }
        
        return root
    }

    v2recursionDelete = function(root, data)
    {
        if (root == null) {
            return root;
        }
    
        if (data < root.data)  {
            root.left = this.v2recursionDelete(root.left, data);
        } 
        
        else if (data > root.data) {
            root.right = this.v2recursionDelete(root.right, data);
        }

        else {

            // node with only one child or no child
            if (root.left == null) {
                return root.right;
            } 
            
            else if (root.right == null) {
                return root.left;
            }

            // node with two children: Get the inorder
            // successor (smallest in the right subtree)
            root.data = this.minValue(root.right);
            root.right = this.v2recursionDelete(root.right, root.data);
        }
      
        return root;
    }

    minValue = function (root) {
        let minv = root.data;
            while (root.left != null) {
                minv = root.left.data;
                root = root.left;
            }

            return minv;
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let i = 0
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

prettyPrint(testTree.root);
testTree.delete(4);
prettyPrint(testTree.root);