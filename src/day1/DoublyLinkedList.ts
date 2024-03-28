type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.tail = this.head = node;
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length + 1) {
            return;
        } else if (!this.head) {
            this.prepend(item);
        } else if (idx === this.length + 1) {
            this.append(item);
        } else {
            this.length++;
            let curr = this.head;
            let count = 0;
            while (curr && count < idx) {
                curr = curr.next!;
            }
            let node = { value: item } as Node<T>;
            node.prev = curr;
            node.next = curr?.next;
            curr.next = node;
        }
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    //9->7->5
    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        } else {
            let curr: Node<T> | undefined = this.head;
            while (curr && curr.value !== item) {
                curr = curr.next;
            }
            if (curr) {
                this.length--;
                let prev = curr.prev; // prev = null //curr=9
                if (prev) {
                    prev.next = curr.next;
                    curr.prev = undefined;
                } else {
                    this.head = curr.next;
                    curr.next = undefined;
                } //prev.next = null
                if (curr.next) {
                    curr.next.prev = prev;
                } else {
                    this.tail = prev;
                }
                curr.next = curr.prev = undefined;
            }
            return curr?.value;
        }
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }
        let curr = this.head;
        let count = 0;
        while (count < idx) {
            curr = curr?.next;
            count++;
        }
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length || idx < 0) return;
        if (idx === 0) {
            this.length--;
            let temp = this.head;
            if (temp) {
                temp.prev = undefined;
                this.head = temp.next;
                temp.next = undefined;
            }
            return temp?.value;
        }
        let count = 0;
        let curr = this.head;
        while (curr && count < idx) {
            count++;
            curr = curr.next;
        }
        this.length--;
        let prev = curr?.prev;
        if (prev) prev.next = curr?.next;
        if (curr?.next) curr.next.prev = prev;
        return curr?.value;
    }
}
