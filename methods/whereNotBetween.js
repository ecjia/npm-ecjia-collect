
import {nestedValue} from "../helpers/nestedValue";

export function whereNotBetween(key, values) {
    return this.filter(item => (
        nestedValue(item, key) < values[0] || nestedValue(item, key) > values[values.length - 1]
    ));
};
