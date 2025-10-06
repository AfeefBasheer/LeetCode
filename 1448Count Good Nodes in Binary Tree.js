//Problem - 1448
//Beats 88% in time complexity
//Beats 69% in Space compleixty
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
    if(root === null) return 0
    let max = root.val
    return (check(root,max))

    function check(root,max){
        if(root === null) return null
        let goodNode = 0
        if(root.val >=max){
            goodNode++
            max = root.val
        }
        
        goodNode = goodNode + check(root.left,max) + check(root.right,max)
        return goodNode
    }
};