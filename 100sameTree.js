////Problem - 100
//Beats 100% in time complexity 
//beats 12% in space complexity 

/*
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) return true
    else if(p===null || q=== null) return false
    else if(p.val !== q.val) return false
    let left = isSameTree(p.left,q.left)
    let right = isSameTree(p.right,q.right)

    if(left && right) return true
    return false
};