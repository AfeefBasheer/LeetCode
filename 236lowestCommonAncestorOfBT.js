//Problem - 236
//Beats 24% in time complexity
//Beats 28% in Space compleixty

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null) return null
    if(root === p || root === q) return root

    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)

    if(left && right) return root
    else if(left) return left
    return right
};