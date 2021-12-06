class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val){
        var node = new Node(val);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }
    get(val){
        let obj = this.head;
        for (let index = 0; index <= val; index++) {
            if (index === val) {
                return obj === null ? undefined : new Node(obj.val);
            }
            obj = obj.next;
        }
    }
}
