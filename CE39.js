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

    rotate(val) {
        let rotate;
        let array = [];
        let recurs = (count, head) => {
            if( this.length  > count ){
                array.push(head.val);
                recurs(count + 1,head.next);
            }
        };
        recurs(0, this.head);
        let getResult = () => {
            let result = array.concat(array.filter((e,i) => i < rotate));
            result.splice(0,rotate)
            this.length = 0;
            this.head = null;
            this.tail = null;
            result.forEach(element => {
                this.push(element)
            });
        };
        if (val >= 0) {
            rotate = val < this.length ? val : val % this.length;
            getResult();
        } else {
            rotate = val > -this.length ? this.length + val : (this.length + val < 0 ? -(this.length + val): this.length + val) % this.length;
            getResult();
        };
    }
}
