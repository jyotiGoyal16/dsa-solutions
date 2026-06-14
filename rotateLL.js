// 61. Rotate List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

//Time O(n) Space O(1)
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    
    let size = getSize(head);
    k = k % size;

    let count = 0;

    let slow = head;
    let fast = head;

    while(fast.next){
        if(count >= k){
            slow = slow.next;
        }
        fast = fast.next;
        count++;
    }

    fast.next = head;
    head = slow.next;
    slow.next = null;

    return head;
};

function getSize(head){
    let size = 0;
    while(head){
        size++;
        head = head.next;
    }

    return size;
}
