
export function tap(fn) {
    fn(this);

    return this;
}
