class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
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
    pop() {
        let oldHead = this.head;    
        let oldLength = this.length;
        this.length = 0;
        this.head = null;
        this.tail = null;
        let pop;
        let recurs = (count, obj) => {
            if( oldLength - 1 > count ){
                this.push(obj.val);
                recurs(count + 1,obj.next);
            } else {
                pop = obj === null ? undefined : new Node(obj.val);
            }
        };
        recurs(0, oldHead);
        return pop;
    }
}
 var singlyLinkedList = new SinglyLinkedList();
 singlyLinkedList.push(5);
 singlyLinkedList.push(10);
 singlyLinkedList.push(15);
 console.log(singlyLinkedList.pop().val);
 console.log(singlyLinkedList.pop().val);
 console.log(singlyLinkedList.pop().val);
 console.log(singlyLinkedList.pop());

