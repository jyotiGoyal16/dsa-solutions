// 141. Linked List Cycle

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//Hashset Time O(n) Space O(n)
var hasCycle = function(head) {
    if(!head) return false;

    let set = new Set();

    while(head){
        if(set.has(head)) return true;
        set.add(head);
        head = head.next;
    }

    return false;
};

//Floyd cycle finding algorith Time O(n) Space O(1)
var hasCycle = function(head) {
    if(!head) return false;

    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) return true;
    }

    return false;
};
