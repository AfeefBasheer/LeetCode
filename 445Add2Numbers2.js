//problem 445
//Beats 80% of TC
//Beats 96% on SC

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function sameLength(head1,head2){
    let ptr1 = head1,ptr2= head2
    while(ptr1.next!==null){
        if(ptr2.next === null)ptr2.next = new ListNode(0,null)
        ptr1 = ptr1.next
        ptr2 = ptr2.next
    }
    return [head1,head2]
 }

var addTwoNumbers = function(l1, l2) {
    let [head1,len1]= reverseLinkedList(l1)
    let [head2,len2] = reverseLinkedList(l2)

    if(len1 < len2) [head1,head2] = sameLength(head2,head1)
    else if(len1 > len2) [head1,head2] = sameLength(head1,head2)
    
    let ptr1 = head1,ptr2 = head2,rem = 0
    while(ptr1!==null){
            let sum = ptr1.val + ptr2.val + rem

            if (sum > 9){
                sum = sum%10
                rem = 1
            }else rem = 0

            ptr1.val = sum
            ptr1 = ptr1.next
            ptr2 = ptr2.next
    }
    if(rem) return new ListNode(1,reverseLinkedList(head1)[0])
    else return reverseLinkedList(head1)[0]
};

function reverseLinkedList(head){
    if(head=== null) return [head,0]
    let ptr = head
    let prev = null
    let len = 0
    while(ptr!==null){
        let temp = ptr.next
        ptr.next = prev
        prev = ptr
        ptr = temp
        len++
    }
    //console.log(prev,len)
    return [prev,len]
}