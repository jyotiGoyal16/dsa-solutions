// 206. Reverse Linked List

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

//recursive Time O(n) Space O(n) recursive call stack
var reverseList = function(head) {
    if(!head || !head.next) return head;

    let prev = null;
    let nextNode = null;

    nextNode = head.next;
    head.next = prev;
    prev = reverseList(nextNode);
    nextNode.next = head;
    return prev;
};

//Iterative Time O(n) Space O(n)
var reverseList = function(head) {
    let prev = null;
    let next = null;

    while(head){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};
