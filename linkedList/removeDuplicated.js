/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Given a sorted linked list, 
 * delete all duplicates such that each element appear only once.
 * Example 1:
 * Input: 1->1->2
 * Output: 1->2
 * 
 * Example 2:
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 */

 const base = require('./base');

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    var cursor = head;
    while(cursor && cursor.next){
        if(cursor.val === cursor.next.val){
            cursor.next = cursor.next.next;
        }else{
            cursor = cursor.next;
        }        
    }
    return head;
};

base.outputList(deleteDuplicates(base.convert2List([1,1,1,2,2,2,3,3,3]) ));