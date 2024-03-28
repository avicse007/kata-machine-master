export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        console.log("Heap before insert", this.data);
        this.data[this.length] = value;
        console.log("Heap between insert", this.data);
        this.heapifyUp(this.length);
        this.length++;
        console.log("Heap after insert", this.data);
    }
    delete(): number {
        console.log("Heap before delete", this.data);
        if (this.length === 0) return -1;
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            console.log("Heap After delete", this.data);
            return out;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        this.data.pop();
        console.log("Heap After delete", this.data);
        return out;
    }
    heapifyUp(idx: number): void {
        if (idx <= 0) return;
        let parentIdx = this.parentIndex(idx);
        if (this.data[parentIdx] > this.data[idx]) {
            this.swap(parentIdx, idx);
            this.heapifyUp(parentIdx);
        }
    }
    heapifyDown(idx: number): void {
        let leftChildIndex = this.leftChild(idx);
        let rightChildIndex = this.rightChild(idx);
        if (idx >= this.length || leftChildIndex >= this.length) {
            return;
        }
        let parentValue = this.data[idx];
        let leftChildValue = this.data[leftChildIndex];
        let rightChildValue = this.data[rightChildIndex];

        if (leftChildValue > rightChildValue && parentValue > rightChildValue) {
            this.swap(rightChildIndex, idx);
            return this.heapifyDown(rightChildIndex);
        } else if (
            rightChildValue > leftChildValue &&
            leftChildValue < parentValue
        ) {
            this.swap(leftChildIndex, idx);
            return this.heapifyDown(leftChildIndex);
        }
    }
    leftChild(idx: number): number {
        return 2 * idx + 1;
    }
    rightChild(idx: number): number {
        return 2 * idx + 2;
    }
    parentIndex(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    swap(idx1: number, idx2: number): void {
        let temp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = temp;
    }
}
