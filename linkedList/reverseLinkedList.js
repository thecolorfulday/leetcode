/*
Link: https://leetcode.com/problems/reverse-linked-list
206. Reverse Linked List
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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
 * @return {ListNode}
 */

function listNode(value){
    this.nodeVal = value;
    this.next = null;
}

var buildList = function(nodeNum){
    var headNode = new listNode();
    var fixedNode = headNode;
    for (let index = 0; index < nodeNum; index++) {
        var node = new listNode(index); 
        headNode.next = node;
        headNode = headNode.next;
    }
    return fixedNode.next; // move one step
}

var outputList = function(nodelist){
    var locallist = null;
    locallist = nodelist;
    while(locallist ) {
        console.log(locallist.value);
        locallist = locallist.next;
    }
}

var reverseList = function(head){
    // lterative way 
    var cursor = head;
    var current = null;
    var newHead = null;
    while (cursor) {
        current = cursor;
        cursor = cursor.next;
        
        current.next = newHead;
        newHead = current;
    }  
    return newHead;
}

var reverseList1 = function(head) {
    // using recursive 
    return buildReverseNode(head, null);     
};

var reserverList2 = function(head){
    var tailNode = head;
    while(tailNode && tailNode.next){
        tailNode = tailNode.next;
    }
    
    var tempTailNode = cursorTailNode = tailNode;
    var tempHeadNode = head;
    while(tempTailNode != head){
        tempHeadNode = head;
        while(tempHeadNode.next != tempTailNode){
            tempHeadNode = tempHeadNode.next;
        }
        tempHeadNode.next = null;
        tempTailNode = tempHeadNode;
        cursorTailNode.next = tempTailNode;
        cursorTailNode = cursorTailNode.next;
    }
    return tailNode; 
};

function buildReverseNode(right, left){
    var head;
    if(right && right.next){
        left = right;
        right = right.next;
        head = buildReverseNode(right, left);
        right.next = left;
        left.next = null;
    }else{
       head = right;
    }
    return head;
}