class Tree {
    constructor(root) {
        this.root = root
        this.size = 0;
    }
}

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7]


// let nodeA = new TreeNode()

let i = 0

let buildTree = function(array, nodeA) {
    if (array.length == 0) {
        return array
    }
    
    let start = 0
    let end = (array.length - 1) 
    let mid = (start + end) / 2
    // nodeA.data = array[mid]
    let nodeA = new TreeNode(array[mid])

    let leftArray = array.slice(start, mid);
    let rightArray = array.slice(mid + 1, array.length);

    console.log(nodeA)

    return buildTree(leftArray, nodeA.left), buildTree(rightArray, nodeA.right)
}

buildTree(array, nodeA)


    // let leftEnd = (leftArray.length - 1) 
    // let leftMid = Math.round(((0 + leftEnd) / 2))
    // nodeA.left = new TreeNode(leftArray[leftMid])

    // let rightEnd = (rightArray.length - 1) 
    // let rightMid = Math.round(((0 + rightEnd) / 2))
    // nodeA.right = new TreeNode(rightArray[rightMid])

    // console.log(nodeA)