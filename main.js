class Tree {
    constructor() {
        this.root = "test"
        this.size = 0;
    }
}

function buildTree (array, start = 0, end = array.length - 1) {
    if (start > end) {
        return null
    }

    let mid = Math.floor((start + end) / 2);


    let root = new TreeNode(array[mid]);
    root.left = buildTree(array, start, mid-1);
    root.right = buildTree(array, mid+1, end);

    return root;
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
testTree.root = buildTree(array, 0, array.length - 1)
console.log(testTree)