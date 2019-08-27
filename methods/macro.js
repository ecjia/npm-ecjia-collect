
export function macro(name, fn) {
    this.constructor.prototype[name] = fn;
}
