export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    let q = [];
    if (!head) return false;
    q.push(head);
    while (q.length) {
        let node = q.shift();
        if (node?.value === needle) {
            return true;
        }
        if (node?.left) q.push(node.left);
        if (node?.right) q.push(node.right);
    }
    return false;
}
