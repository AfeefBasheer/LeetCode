//problem - 143
//Beats 100% in time complexity
//Beats 90% in space Complexity

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let ptr = head
    let mid = head
    while(ptr!==null && ptr.next!==null){
        if(ptr.next.next){
            ptr = ptr.next.next
            mid = mid.next
        }else if(ptr.next) ptr = ptr.next
    }
    
    let curr = mid.next
    mid.next = null
    let prev = null

    while(curr!==null){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    let first = head
    let second = prev

    while(second!==null){
        let temp = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp

        first = temp
        second = temp2
    }
};