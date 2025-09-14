//Problem - 82
//Beats 5%  on Time Complexity (Optimal)
//Beats 30% on Space Complexity (Optimal)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head
    let arr = [],ptr = head
    while(ptr!==null){
        if(arr.at(-1) === ptr.val ){
            while(ptr!== null && arr.at(-1) === ptr.val){
                ptr = ptr.next
            }
            arr.pop()
            if(ptr === null) break
        }
        arr.push(ptr.val)
        ptr = ptr.next
    }
    console.log(arr)
    if(arr.length===0) return null
    ptr = head
    for(let i=0;i<arr.length-1;i++){
        ptr.val = arr[i]
        ptr = ptr.next
    }
    ptr.val = arr.at(-1)
    ptr.next = null
    return head
};