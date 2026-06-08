// 160. Intersection of Two Linked Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Using HashMap(set) Time O(m+n) Space O(n)
var getIntersectionNode = function(headA, headB) {
    let set = new Set();

    let currentB = headB;
    while(currentB){
        set.add(currentB);
        currentB = currentB.next;
    }

    let currentA = headA;
    while(currentA){
        if(set.has(currentA)) return currentA;
        currentA = currentA.next;
    }

    return null;
};

// using size difference traversal Time O(m+n) Space O(1)
var getIntersectionNode = function(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    let sizeA = getSize(currentA);
    let sizeB = getSize(currentB);

    if(sizeA > sizeB){
        let diff = sizeA - sizeB;
        currentA = traverseDiff(currentA, diff);
    }else{
        let diff = sizeB - sizeA;
        currentB = traverseDiff(currentB, diff);
    }

    while(currentA && currentB){
        if(currentA === currentB) return currentA;
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null;
};

function getSize(head){
    let size = 0;

    while(head){
        size++;
        head = head.next;
    }

    return size;
}

function traverseDiff(head, diff){
    let count = 0;

    while(head && count < diff){
        count++;
        head = head.next;
    }

    return head;
}
