
export function when(value, fn, defaultFn) {
    if (!value) {
        fn(this);
    } else {
        defaultFn(this);
    }
}
