
import {nestedValue} from "../helpers/nestedValue";

export function keyBy(key) {
    const collection = {};

    if (typeof key === 'function') {
        this.items.forEach((item) => {
            collection[key(item)] = item;
        });
    } else {
        this.items.forEach((item) => {
            const keyValue = nestedValue(item, key);

            collection[keyValue || ''] = item;
        });
    }

    return new this.constructor(collection);
}
