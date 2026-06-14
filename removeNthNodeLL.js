// 19. Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Two pass Time O(n) Space O(1)
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    
    let length = 0;

    while(head){
        length++;
        head = head.next;
    }

    let prevPos = length - n;
    let prev = dummy;
    for(let i = 0; i < prevPos; i++){
        prev = prev.next;
    }

    prev.next = prev.next.next;
    return dummy.next;
};

//One pass Time O(n) Space O(1)
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;
    let count = 0;

    while(fast.next){
        if(count >= n){
            slow = slow.next;
        }
        fast = fast.next;
        count++;
    }

    slow.next = slow.next.next;
    return dummy.next;
};
