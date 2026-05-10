// 199. Binary Tree Right Side View

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
 * @return {number[]}
 */

//recursive
var rightSideView = function(root) {
    let res = [];
    bfs(root, res, 0);
    return res;
};

function bfs(root, res, level){
    if(!root) return;

    if(level === res.length) res.push(root.val);
    bfs(root.right, res, level + 1);
    bfs(root.left, res, level + 1);
}

//Iterative using queue
var rightSideViewQueue = function(root) {
    if(!root) return [];
    
    let res = [];
    let queue = [root];

    while(queue.length > 0){
        let n = queue.length;

        for(let i = 0; i < n; i++){
            let node = queue.shift();
            
            if(i === n - 1){
                res.push(node.val);
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return res;
};
