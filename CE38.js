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

    insert(index, val){
        if( index > this.length || index < 0) {
            return false;
        }
        let oldHead = this.head;
        let oldLength = this.length;
        this.length = 0;
        this.head = null;
        this.tail = null;
        for (let i = 0; i < oldLength; i++) {
            if( index === i ) {
                this.push(val);
            }
            this.push(oldHead.val);
            oldHead = oldHead.next;
            if( index - 1 === i && index === oldLength) {
                this.push(val);
            }
        };
        return true;
    }
}
