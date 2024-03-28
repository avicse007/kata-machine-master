export default function pre_order_search(head: BinaryNode<number>): number[] {
    let res: number[] = [];
    return preOrder(head, res);
}

function preOrder(head: BinaryNode<number>, res: number[]): number[] {
    if (!head) return res;
    res.push(head.value);
    if (head.left) preOrder(head.left, res);
    if (head.right) preOrder(head.right, res);
    return res;
}
