//Problem - 543
//Beats 100% in time complexity
//Beats 61% in Space compleixty


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
var diameterOfBinaryTree = function(root) {
    let diameter = 0

    function findHeight(node){
        if(!node) return 0

        let left = findHeight(node.left)
        let right = findHeight(node.right)

        diameter = Math.max(diameter , left+right)
        return 1 + Math.max(left,right)
    }
    findHeight(root)
    return diameter

};