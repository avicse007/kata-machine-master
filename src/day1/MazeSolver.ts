export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    solve_maze(maze, wall, start, end, seen, path);

    return path;
}

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function solve_maze(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    //Base case
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length ||
        maze[curr.y][curr.x] === wall ||
        seen[curr.y][curr.x]
    ) {
        return false;
    }
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    //Pre recursion
    path.push(curr);
    seen[curr.y][curr.x] = true;
    //recursion
    for (let i = 0; i < dir.length; i++) {
        let [dx, dy] = dir[i];
        if (
            solve_maze(
                maze,
                wall,
                { x: curr.x + dx, y: curr.y + dy },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    //post recursion
    path.pop();
    //seen[curr.x][curr.y] = false;
    return false;
}
