
import {values as getValues} from "../helpers/values";

export function values() {
    return new this.constructor(getValues(this.items));
}
