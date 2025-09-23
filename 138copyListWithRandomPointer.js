//Problem - 138
//Beats 73% in time complexity (optimized)
//beats 98% in space complexity (optimized)

var copyRandomList = function (head) {
  //Approach - 1
  if (!head) return head;

  let map = new Map();
  let ptr = head;
  while (ptr) {
    map.set(ptr, new _Node(ptr.val, null, null));
    ptr = ptr.next;
  }

  ptr = head;
  while (ptr) {
    let copy = map.get(ptr);
    copy.next = map.get(ptr.next) || null;
    copy.random = map.get(ptr.random) || null;
    ptr = ptr.next;
  }
  return map.get(head);

  //Approach - 2
  // if(head == null) return head
  // let arr = [],ptr = head
  // let start =new _Node(null,null,null),curr = start
  // while(ptr!=null){
  //     arr.push({
  //         value:ptr.val,
  //         next:ptr.next,
  //         random:ptr.random
  //     })
  //     curr.val = ptr.val
  //     curr.next = new _Node(null,null,null)
  //     curr = curr.next
  //     ptr = ptr.next
  // }
  // curr = start,ptr = head
  // for(let i = 0;i<arr.length;i++){
  //     if(arr[i].random!== null){
  //         let itr = head,j
  //        for(j=0;j<arr.length;j++){
  //             if(itr === arr[i].random) break
  //             else itr = itr.next
  //         }
  //         let nxt= start
  //         for(let l=0;l<j;l++){
  //             nxt  = nxt.next
  //         }
  //         curr.random = nxt
  //     }
  //     ptr = ptr.next
  //     curr = curr.next
  // }
  // curr = start
  // while((curr.next)&& (curr.next.next) && (curr.next.next)!=null){
  //     console.log(curr)
  //     curr = curr.next
  // }
  // curr.next = null

  // return start
};
