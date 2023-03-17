let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let start = 0;

class binaryST {
    constructor() {
        this.root = null
        this.size = 0;
    }

    createBST = function(start, array) {
        let end = (array.length - 1) 
        let midNode = Math.round(((start + end) / 2))

        let leftArray = array.slice(0, midNode);
        let rightArray = array.slice(midNode, array.length);

        if (rightArray.length == 1) {
            let leftBranch = new treeNode(leftArray)
            let rightBranch = new treeNode(rightArray)
            return leftBranch, rightBranch;
        }
        
        return this.createBST(start, leftArray), this.createBST(start, rightArray)
    }
}

class treeNode {
    constructor(data, branch = null) {
        this.data = data;
        this.branch = branch;
    }
}


let test = new binaryST(start, array)
console.log(test)