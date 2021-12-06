class Node{
    constructor(val){
        this.val = val;
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

    remove(value){
        if (this.length - 1 < value) {
            return undefined;
        }
        let removedVal = this.get(value);
        let oldHead = this.head;    
        let oldLength = this.length;
        this.length = 0;
        this.head = null;
        this.tail = null;
        let pop;
        let recurs = (count, obj) => {
            if( oldLength > count ){
                if (obj.val !== removedVal.val){
                    this.push(obj.val);
                    recurs(count + 1,obj.next);
                } else {
                    recurs(count + 1,obj.next);
                }
            } else {
                pop = obj === null ? undefined : new Node(obj.val);
            }
        };
        recurs(0, oldHead);
        return removedVal;
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
