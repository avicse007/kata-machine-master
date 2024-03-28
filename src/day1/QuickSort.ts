export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) return;
    const pivotIdx = partition(arr, low, high);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low;
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            let temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
            idx++;
        }
    }
    arr[high] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
