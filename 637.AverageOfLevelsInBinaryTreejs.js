//Problem - 637
//Beats 90% in time complexity
//Beats 21% in Space compleixty
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null) return []
    let queue = [root],res=[]

    while(queue.length > 0){
        let size = queue.length,total = 0
        for(let i=0;i<size;i++){
            let node = queue[i]
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            total = total + node.val
        }
        res.push(total/size)
        queue = queue.slice(size)
    }
    console.log(res)
    return res
};