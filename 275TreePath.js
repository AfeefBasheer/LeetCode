////Problem - 175
//Beats 100% in time complexity 
//beats 36% in space complexity 
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
 * @return {string[]}
 */
var binaryTreePaths = function(root,arr="",res=[]) {
    if(root!==null) {
        if(arr=='') arr = root.val.toString()
        else arr = arr+ '->'+root.val
    }
    if(root.left === null && root.right === null) res.push(arr)
    if(root.left !== null ) binaryTreePaths(root.left,arr,res)
    if(root.right !== null ) binaryTreePaths(root.right,arr,res)
    return res
};