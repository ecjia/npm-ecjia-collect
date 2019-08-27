
export function flatMap(fn) {
    return this.map(fn).collapse();
}
