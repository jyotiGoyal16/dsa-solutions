// 876. Middle of the Linked List

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

//Using array Time O(n) Space O(n)
var middleNode = function(head) {
    let arr = [];
    let current = head;

    while(current){
        arr.push(current);
        current = current.next;
    }

    let midIndex = Math.floor(arr.length / 2);

    return arr[midIndex];
};

// Optimal Using slow and fast pointer Time O(n) Space O(1)
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
