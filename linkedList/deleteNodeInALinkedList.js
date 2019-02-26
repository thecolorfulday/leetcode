/*
https://leetcode.com/problems/delete-node-in-a-linked-list/
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, 
the linked list should become 4 -> 1 -> 9 after calling your function.
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, 
the linked list should become 4 -> 5 -> 9 after calling your function.

Note:

The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.
*/
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const base = require('./base');

var head = base.buildList(10);
var nodeToBeDeleted = new base.listNode(5);

var deleteNode = function(nodeToBeDeleted){
    // very simple && clean!!! 
    // nodes are linked together, so we can do like the following
    nodeToBeDeleted.val = nodeToBeDeleted.val;
    nodeToBeDeleted.next = nodeToBeDeleted.next.next;
}

var deleteNode2 = function(node) {
    var cursor = head;
    while(cursor && cursor.next ){
        if(cursor.next.val === node.val){
            cursor.next = cursor.next.next;
            break;
        }
        cursor = cursor.next;
    }
}
deleteNode(nodeToBeDeleted);
base.outputList(head);
