
class TreeNode {
    constructor(data, leftChild = null, rightChild = null) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    addLeftNode = function(newNode) {
        this.leftChild = new TreeNode(newNode)
    }

    addRightNode = function(newNode) {
        this.rightChild = new TreeNode(newNode)
    }
}

let array = [1, 2, 3, 4, 5, 6, 7]

class Tree {
    constructor(root) {
        this.root = root
        this.size = 0;
    }
}

let nodeA = new TreeNode()

let i = 0

let buildTree = function(array, nodeA, i) {
    console.log("called " + i++)
    console.log(nodeA)

    if (array.length == 0) {
        return array
    }
    
    let end = (array.length - 1) 
    let midNodeNo = Math.round(((0 + end) / 2))
    
    nodeA.data = new TreeNode(array[midNodeNo])
    nodeA.addLeftNode()
    nodeA.addRightNode()

    let leftArray = array.slice(0, midNodeNo);
    let rightArray = array.slice(midNodeNo + 1, array.length);

    return buildTree(leftArray, nodeA.leftChild, i), buildTree(rightArray, nodeA.rightChild, i)
}

buildTree(array, nodeA, i)