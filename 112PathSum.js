//Problem - 74
//Beats 100% in time complexity
//Beats 95% in Space compleixty
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum,sum = 0) {
    if(root === null) return 0
    sum = sum + root.val
    if(root.left === null && root.right === null) return sum === targetSum
    else return hasPathSum(root.left,targetSum,sum) || hasPathSum(root.right,targetSum,sum)

};