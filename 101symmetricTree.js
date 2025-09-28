////Problem - 101
//Beats 100% in time complexity 
//beats 61% in space complexity 

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
var isSymmetric = function(root) {
    if(root === null) return true

    return checkSubTree(root.left,root.right)

    function checkSubTree(a,b){
        if(a === null && b===null) return true
        else if(a===null || b===null)return false
        if(a.val!==b.val) return false

        let leftCheck = checkSubTree(a.left,b.right)
        let rightCheck = checkSubTree(a.right,b.left)
        
        return leftCheck && rightCheck
    }
};