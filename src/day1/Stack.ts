type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }
    // 1<-2<-3
    //

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    pop(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const temp = this.head;
        this.head = this.head.next;
        temp.next = undefined;
        return temp.value;
    }
    peek(): T | undefined {
        if (!this.head) return undefined;
        return this.head.value;
    }
}
