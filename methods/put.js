
export function put(key, value) {
    this.items[key] = value;

    return this;
}
