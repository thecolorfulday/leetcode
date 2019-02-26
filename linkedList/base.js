class listNode{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

exports.listNode = listNode;

exports.buildList = function (nodeNum){
    var headNode = new listNode();
    var fixedNode = headNode;
    for (let index = 0; index < nodeNum; index++) {
        var node = new listNode(index); 
        headNode.next = node;
        headNode = headNode.next;
    }
    return fixedNode.next; // move one step
}

exports.outputList = function (nodelist){
    var locallist = null;
    locallist = nodelist;
    while(locallist && locallist ) {
        console.log(locallist.val);
        locallist = locallist.next;
    }
}

exports.convert2List = function (arrayList){
    var head = {'next': null};
    var cursor = head;
    for (let index = 0; index < arrayList.length; index++) {
        var node = new listNode(arrayList[index]);
        cursor.next = node;
        cursor = cursor.next;
    }
    return head.next;
}