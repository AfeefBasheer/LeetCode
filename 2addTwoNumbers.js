//Problem - 2
//Beats 86% in time complexity
//72% in space complexity

var addTwoNumbers = function (l1, l2) {
  let ptr1 = l1,
    ptr2 = l2;
  let sum,
    rem = 0;
    
  while (ptr1 != null || ptr2 != null || rem == 1) {
    if (ptr1 != null && ptr2 != null) {
      sum = ptr1.val + ptr2.val + rem;
      rem = Math.floor(sum / 10);
      ptr2.val = sum % 10;
    } else if (ptr1 != null && ptr2 === null) {
      sum = ptr1.val + rem;
      rem = Math.floor(sum / 10);
      let newNode = new ListNode(sum % 10);
      let temp = l2;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    } else if (ptr1 === null && ptr2 != null) {
      sum = ptr2.val + rem;
      rem = Math.floor(sum / 10);
      ptr2.val = sum % 10;
    } else if (ptr1 == null && ptr2 == null && rem == 1) {
      let newNode = new ListNode(rem);
      let temp = l2;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      rem = 0;
    }
    if (ptr1 != null) ptr1 = ptr1.next;
    if (ptr2 != null) ptr2 = ptr2.next;
  }
  return l2;
};
