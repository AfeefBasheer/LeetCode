//problem - 11
//Beats 69% on time complexity 
//Beats 85% on time complexity 

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

var minDepth = function(root) {
    if (root === null) return 0;

    // If one child is null, ignore it and recurse on the other
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);

    // Both children exist, take the smaller depth
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
