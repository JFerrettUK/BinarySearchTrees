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
        testTree.size++;
    
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
        
        if (insert < root.key) {
            root.left = this.recursionInsert(root.left, insert);
        } else if (insert > root.key) {
            root.right = this.recursionInsert(root.right, insert);
        }
        return root;
    }

    delete = function(remove) {
        this.root = this.deleteNode(this.root, remove);
    }

    deleteNode = function(root, remove) {
        //If no root matches value, return
        if (root == null) {
            return root
        }

        if (remove < root.key) {
            root.left = this.deleteNode(root.left, remove);
        } else if (remove > root.key) {
            root.right = this.deleteNode(root.right, remove);
        } else {
            if (root.left == null) {
                return root.right
            }
            else if (root.right == null) {
                return root.left
            } 

            root.key = this.minValue(root.right);
            console.log(root.key + " is the minimum value")
            root.right = this.deleteNode(root.right, root.key)
            
        }

        return root
    }

    minValue = function (root) {
        let minv = root.key;
        while (root.left != null) {
            console.log(minv + " is minv while root.left != null")
            minv = root.left.key;
            console.log(minv + " is minv of the next left key")
            root = root.left;
            console.log(root + " is the root")
        }
        return minv;
    }

}


class TreeNode {
    constructor(key) {
        this.key = key;
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
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.key}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

prettyPrint(testTree.root);
testTree.delete(5);

prettyPrint(testTree.root);