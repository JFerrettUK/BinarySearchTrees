class Tree {
    constructor() {
        this.root = null
        this.size = 0;
    }

    buildTree = function(array, node) {
        if (array.length == 0) {
            return 
        }
        
        function findMid(array) {
            let end = (array.length - 1) 
            let mid = (0 + end) / 2
            return mid
        }
    
        let mid = findMid(array)
        let leftArray = array.slice(0, mid);
        let rightArray = array.slice(mid + 1, array.length);
    
        node = new TreeNode(array[mid])
    
        if (leftArray.length > 0) {
            node.left = new TreeNode(leftArray[findMid(leftArray)])
        }
        
        if (rightArray.length > 0) {
            node.right = new TreeNode(rightArray[findMid(rightArray)])
        }
        console.log(node)
    
        this.size++

        return this.buildTree(leftArray, node.left), this.buildTree(rightArray, node.right)
    }
}

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7]
let testTree = new Tree
testTree.buildTree(array, testTree.root)
console.log(testTree)