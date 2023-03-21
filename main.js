class Tree {
    constructor() {
        this.root = "test"
        this.size = 0;
    }

    buildTree = function(array, node) {
        if (array.length == 0) {
            return 
        }
        
        function findMid(enterArray) {
            let end = (enterArray.length - 1) 
            let mid = (0 + end) / 2
            return mid
        }
       
        let mid = Math.floor(findMid(array))
        node = new TreeNode(array[mid])

        let leftArray = array.slice(0, mid);
        let rightArray = array.slice(mid + 1, array.length);
    
    
        if (leftArray) {
            let leftMid = Math.floor(findMid(leftArray))
            node.left = new TreeNode(leftArray[leftMid])
        }
        
        if (rightArray) {
            let rightMid = Math.floor(findMid(rightArray))
            node.right = new TreeNode(rightArray[rightMid])
        }
        console.log(node)

        this.size++
        this.root = "test2"

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

let testRoot = "I'm global"
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let testTree = new Tree
testTree.buildTree(array)
console.log(testRoot)