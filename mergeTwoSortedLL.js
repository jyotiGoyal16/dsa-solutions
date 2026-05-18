// 21. Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//merge sort for LL Time O(m + n) Space O(m + n)
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;

    let dummy = new ListNode(0);
    let res = dummy;

    while(list1 && list2){
        if(list1.val < list2.val){
            res.next = new ListNode(list1.val);
            list1 = list1.next;
        }else{
            res.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        res = res.next;
    }

    while(list1){
        res.next = new ListNode(list1.val);
        list1 = list1.next;
        res = res.next;
    }

    while(list2){
        res.next = new ListNode(list2.val);
        list2 = list2.next;
        res = res.next;
    }

    return dummy.next;
};

//In place sorting using recursion Time O(m + n) Space O(m + n) - due to recursion stack
var mergeTwoLists = function(list1, list2) {
    if(!list1){
        return list2;
    }else if(!list2){
        return list1;
    }else if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
