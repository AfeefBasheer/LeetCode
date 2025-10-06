//problem - 199
//Beats 100% on TC
//Beats 50% on SC
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
var rightSideView = function(root) {
    const output = [];

    function dfs(node, depth) {
        if (!node) return;

        // If this is the first node we’re visiting at this depth,
        // it’s the rightmost one (since we go right first)
        if (depth === output.length) {
            output.push(node.val);
        }

        // Prioritize right before left
        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }

    dfs(root, 0);
    return output;
};



// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var rightSideView = function(root) {
//     if(root == null) return []

//     let output = [],queue = [root],start = 0
//     while(start<queue.length){
//         let size = queue.length - start
//         output.push(queue[start].val)
//         for(let i=0;i<size;i++){
//             let node = queue[start++]
            
//             if(node.right!== null){
//                 queue.push(node.right)
//             }
//             if(node.left!==null ){
//                 queue.push(node.left)
//             }
//         }
//     }
//     console.log(output)
//     return output
// };