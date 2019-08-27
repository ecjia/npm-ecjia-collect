
import {variadic} from "../helpers/variadic";

export function has(...args) {
    const properties = variadic(args);

    return properties.filter(key => this.items[key]).length === properties.length;
}
