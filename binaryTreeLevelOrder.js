// 102. Binary Tree Level Order Traversal

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
 * @return {number[][]}
 */

//DFS + level tracking Recursive Time O(n) Space O(n) for result + O(h) recursion stack
var levelOrder = function(root) {
    let res = [];
    levelDFS(root, res, 0);
    return res;
}

function levelDFS(root, res, level){
    if(!root) return;

    if(!res[level]) res[level] = [];

    res[level].push(root.val);
    if(root.left) levelDFS(root.left, res, level + 1);
    if(root.right) levelDFS(root.right, res, level + 1);
}

//queue Time O(n) Space O(n)
var levelOrder = function(root) {
    if(!root) return [];
    
    let res = [];
    let queue = [root];

    while(queue.length){
        let n = queue.length;
        let answer = [];
        for(let i = 0; i < n; i++){
            let node = queue.shift();
            answer.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(answer);
    }
    return res;
}
