
import {values} from "../helpers/values";

export function every(fn) {
    const items = values(this.items);

    return items
        .map((item, index) => fn(item, index))
        .indexOf(false) === -1;
};
