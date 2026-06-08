// 234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Using stack Time O(n) Space O(n)
var isPalindrome = function(head) {
    if(!head || !head.next) return true;

    let stack = [];
    let current = head;

    while(current){
        stack.push(current.val);
        current = current.next;
    }

    current = head;
    while(current){
        if(stack.pop() !== current.val){
            return false;
        }
        current = current.next;
    }

    return true;
};

// Using reverse Time O(n) Space O(1)
var isPalindrome = function(head) {
    if(!head || !head.next) return true;

    //find middle
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse from middle
    let prev = null;
    let current = slow;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    //check pallindrome
    current = head;
    let reversed = prev;
    while(reversed){
        if(current.val !== reversed.val) return false;
        current = current.next;
        reversed = reversed.next;
    }

    return true;
};
