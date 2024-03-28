export default function post_order_search(head: BinaryNode<number>): number[] {
    let res: number[] = [];
    return postOrder(head, res);
}

function postOrder(head: BinaryNode<number>, res: number[]): number[] {
    if (!head) return res;
    if (head.left) postOrder(head.left, res);
    if (head.right) postOrder(head.right, res);
    res.push(head.value);
    return res;
}
