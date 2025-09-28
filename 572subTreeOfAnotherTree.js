////Problem - 572
//Beats 70% in time complexity 
//beats 70% in space complexity 

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(root===null && subRoot === null) return true
    if(root=== null || subRoot === null)return false
    let check=false
    if(root.val === subRoot.val) check = checkTree(root,subRoot)
    if(check) return true
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)

    function checkTree(root,subRoot){
        if(root === null && subRoot === null) return true
        else if(root === null || subRoot === null) return false
        if(root.val !== subRoot.val) return false

        let leftCheck = checkTree(root.left,subRoot.left)
        let rightCheck = checkTree(root.right,subRoot.right)
        if(leftCheck && rightCheck) return true
        return false

    }
};