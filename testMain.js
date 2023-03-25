// Javascript program to demonstrate
// delete operation in binary
// search tree
class treeNode
{
    constructor(item)
    {
        this.key = item;
        this.left = this.right = null;
    }
}
 
// Root of BST
let root=null;
 
// This method mainly calls deleteRec()
function deleteKey(key)
{
    root = deleteRec(root, key);
}
 
/* A recursive function to
      delete an existing key in BST
     */
function deleteRec(root,key)
{
    /* Base Case: If the tree is empty */
        if (root == null)
            return root;
  
        /* Otherwise, recur down the tree */
        if (key < root.key)
            root.left = deleteRec(root.left, key);
        else if (key > root.key)
            root.right = deleteRec(root.right, key);
  
        // if key is same as root's
        // key, then This is the
        // treeNode to be deleted
        else {
            // treeNode with only one child or no child
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;
  
            // treeNode with two children: Get the inorder
            // successor (smallest in the right subtree)
            root.key = minValue(root.right);
  
            // Delete the inorder successor
            root.right = deleteRec(root.right, root.key);
        }
  
        return root;
}
 
function minValue(root)
{
    let minv = root.key;
        while (root.left != null)
        {
            minv = root.left.key;
            root = root.left;
        }
        return minv;
}
 
// This method mainly calls insertRec()
function insert(key)
{
    root = insertRec(root, key);
}
 
/* A recursive function to
       insert a new key in BST */
function insertRec(root,key)
{
    /* If the tree is empty,
          return a new treeNode */
        if (root == null) {
            root = new treeNode(key);
            return root;
        }
  
        /* Otherwise, recur down the tree */
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);
  
        /* return the (unchanged) treeNode pointer */
        return root;
}
 
 // This method mainly calls InorderRec()
function inorder()
{
    inorderRec(root);
}
 
// A utility function to do inorder traversal of BST
function inorderRec(root)
{
    if (root != null) {
            inorderRec(root.left);
            document.write(root.key + " ");
            inorderRec(root.right);
        }
}
 
// Driver Code
/* Let us create following BST
              50
           /     \
          30      70
         /  \    /  \
        20   40  60   80 */
insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
 
document.write(
"Inorder traversal of the given tree<br>");
inorder();
 
document.write("<br>Delete 20<br>");
deleteKey(20);
document.write(
"Inorder traversal of the modified tree<br>");
inorder();
 
document.write("<br>Delete 30<br>");
deleteKey(30);
document.write(
"Inorder traversal of the modified tree<br>");
inorder();
 
document.write("<br>Delete 50<br>");
deleteKey(50);
document.write(
"Inorder traversal of the modified tree<br>");
inorder();
     
// This code is contributed by avanitrachhadiya2155