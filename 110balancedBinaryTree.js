//Problem - 110
//Beats 89% in time complexity
//Beats 70% in Space compleixty


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
 * @return {boolean}
 */
var isBalanced = function(root) {   
    if(root == null) return true
    if(Height(root)==-1) return false
    else return true

    function Height(node){
        if(node == null) return 0

        let left = Height(node.left)
        let right = Height(node.right)
        if(left === -1 || right === -1) return -1
        if(Math.abs(left - right) > 1) return -1
        return 1+Math.max(left,right)
    }
};