export default function in_order_search(head: BinaryNode<number>): number[] {
    let res: number[] = [];
    return inOrder(head, res);
}

function inOrder(head: BinaryNode<number>, res: number[]): number[] {
    if (!head) return res;
    if (head.left) inOrder(head.left, res);
    res.push(head.value);
    if (head.right) inOrder(head.right, res);
    return res;
}
