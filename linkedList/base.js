console.log('hello nodejs');

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