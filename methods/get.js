
export function get(key, defaultValue = null) {
    if (this.items[key] !== undefined) {
        return this.items[key];
    }

    if (typeof defaultValue === 'function') {
        return defaultValue();
    }

    if (defaultValue !== null) {
        return defaultValue;
    }

    return null;
}
