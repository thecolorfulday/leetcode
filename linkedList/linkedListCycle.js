/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Given a linked list, determine if it has a cycle in it.
 * To represent a cycle in the given linked list, 
 * we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. 
 * If pos is -1, then there is no cycle in the linked list.
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where tail connects to the first node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * Follow up:
 * Can you solve it using O(1) (i.e. constant) memory?
 */

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

const base = require('./base'); 
var head = new base.listNode(1);
var node1 = new base.listNode(2);
head.next = node1;
node1.next = head;

var hasCycle1 = function(head){
    // very funny idea, 
    // using the run-chasing, 
    // in a cycle, the fast will meet the slow at a certain time 
    if (head == null || head.next == null) {
        return false;
    }
    var slow = head;
    var fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}

var hasCycle = function(head){
    var pos = -1;
    var cursor = head;
    var nodeStorage = [];

    while(head && head.next){
        nodeStorage.push(head);
        
        cursor = head.next;
        head.next = null;
        head = cursor;        
    }
    
    for(var i = 0; i < nodeStorage.length; i++){
        if ( nodeStorage[i] == head ){
            pos = i;
            break;
        }
    }
    return pos;
}

console.log(hasCycle(head));