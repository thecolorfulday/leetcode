/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const base = require('./base');
var l1 = base.buildList(2);
var l2 = base.buildList(3);

var mergeTwoLists = function(l1, l2) {
    var head = tail = null;
    if(l1 && l2){
        if (l1.val <= l2.val) {
            head = tail = l1;
            l1 = l1.next;
        }else{
            head = tail = l2;
            l2 = l2.next;
        }
        while( l1 && l2 ){
            if(l1.val <= l2.val){
                tail.next = l1;
                l1 = l1.next;
            }else{
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        // tail.next = l1 ? l1 : l2;
        tail.netxt = l1 || l2;
    }else{
        head = l1 || l2;
    }   
    return head; 
};

var mergedList = mergeTwoLists(l1, l2);
base.outputList(mergedList);
