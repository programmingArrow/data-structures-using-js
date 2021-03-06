class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        if(this.length === 1){
            this.tail = {
                value: value,
                next: null
            }
            this.head.next = this.tail;
        } else {
            const oldTail = this.tail;
            this.tail = {
                value: value,
                next: null
            }
            oldTail.next = this.tail;
        }

        this.length++;
    }

    prepend(value) {
        const oldHead = this.head;

        this.head = {
            value: value,
            next: oldHead
        }

        this.length++;
    }

    insert(value, index){
        //if index is greater than last item index then append new item at last
        if(index >= this.length){
            this.append(value);
        }

    }
    
}

linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.prepend(3);

console.log(linkedList)