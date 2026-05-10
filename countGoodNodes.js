//1448. Count Good Nodes in Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let maxValue = root.val;
    let count = 0;

    return countNodes(root, maxValue);
};

function countNodes(root, maxValue){
    if(!root) return 0;

    let count = 0;

    if(root.val >= maxValue){
        count++;
    }
    maxValue = Math.max(maxValue, root.val);
    count += countNodes(root.left, maxValue);
    count += countNodes(root.right, maxValue);

    return count;
}
