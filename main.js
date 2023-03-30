class Tree {
    constructor() {
        this.root = null
    }
    
    buildTree  = function(array, start = 0, end = array.length - 1) {
        if (start > end) {
            return null;
        }
    
        let mid = Math.floor((start + end) / 2);
        let root = new TreeNode(array[mid]);
        root.left = this.buildTree(array, start, mid-1);
        root.right = this.buildTree(array, mid+1, end);
    
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
            root.right = this.deleteNode(root.right, root.key)
        }

        return root
    }

    minValue = function (root) {
        let minv = root.key;
        while (root.left != null) {
            minv = root.left.key;
            root = root.left;
        }
        return minv;
    }

    find = function(findValue) {
        if(!findValue || !this.root) {
            return null
        }
        
        let root = this.root;
        let found = false;
        while (!found && root) {
            if (findValue == root.key) {
                found = root
            }

            if (findValue < root.key) {
                root = root.left;
            } else if (findValue > root.key) {
                root = root.right;
            }
        }
        if (found !== false) return found;
        if (found == false) return "Value not found";
    }

    exploreNodes = function() {
        let root = this.root;

        if (!root) return

        let result = []
        
        let queue = [root];

        while (queue.length !== 0) {
            let subarr = []
            let n = queue.length
            for (let i = 0; i < n; i++) {
                let node = queue.pop()
                subarr.push(node.key)
                
                if (node.left) {
                    queue.unshift(node.left) 
                }
                if (node.right) {
                    queue.unshift(node.right)     
                }               
            }
            result.push(subarr)
        }

        let newResult = []

        for (let index = 0; index <= result.length; index++) {
            newResult = newResult.concat(result[index]);
        }

        newResult.pop()
        return newResult        
    }

    levelOrder = function(funct) {
        let valueFunc = this.exploreNodes();
        funct(valueFunc)
    }

    preorder(func) {
        let preorderVal = this.preorderRecur(this.root);
        func(preorderVal)
    }

    preorderRecur = function(root, arr = []) {
        if(!root) {
            return null
        }

        arr.push(root.key);

        if (root.left) {
            this.preorderRecur(root.left, arr);
        }
        if (root.right) {
            this.preorderRecur(root.right, arr);
        }    

        return arr;
    }

    inorder = function(func) {
        let preorderVal = this.inorderRecur(this.root);
        func(preorderVal)
    }

    inorderRecur = function(root, arr = []) {
        if(!root) {
            return null
        }

        if (root.left) {
            this.inorderRecur(root.left, arr);
        }

        arr.push(root.key);

        if (root.right) {
            this.inorderRecur(root.right, arr);
        }    

        return arr;
    }

    postorder = function(func) {
        let preorderVal = this.postorderRecur(this.root);
        func(preorderVal)
    }

    postorderRecur = function(root, arr = []) {
        if(!root) {
            return null
        }

        if (root.left) {
            this.postorderRecur(root.left, arr);
        }

        if (root.right) {
            this.postorderRecur(root.right, arr);
        }    

        arr.push(root.key);

        return arr;
    }
    
    height = function(root) {
        if (root == null) {
            return 0
        }
        let leftTreeHeight = this.height(root.left)
        let rightTreeHeight = this.height(root.right)
        return Math.max(leftTreeHeight, rightTreeHeight) + 1
    }

    nodeHeight = function(findValue) {
        let foundValue = this.find(findValue)
        return this.height(foundValue)
    }

    depth = function(findValue) {
        let foundValue = this.find(findValue)
        let valueHeight =  this.height(foundValue)
        //valueHeight is how many nodes the target is from the leaf
        //find the number of branches and delete this number +1
                
        let rootHeight = 0

        function findHeight(n, arr) {
            if(i == -1) {
                return
            }
            height++
            findHeight(arr[i], arr, height)
            return height
        }

        this.root
    }
}

class TreeNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
console.log(testTree.depth(6))
