// 24. Swap Nodes in Pairs

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

// Iterative Time O(n) Space O(1)
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let prev = dummy;
    let curr = head;
    let next = curr.next;

    while(curr && next){
        prev.next = next;
        curr.next = next.next;
        next.next = curr;

        prev = curr;
        curr = prev.next;
        next = curr && curr.next;
    }

    return dummy.next;
};

// Time O(n) Space O(1)- excluding the recursive call stack
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let first = head;
    let second = head.next;

    first.next = swapPairs(second.next);
    second.next = first;
    return second;
};
