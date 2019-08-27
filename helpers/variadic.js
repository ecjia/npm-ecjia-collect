
/**
 * Variadic helper function
 *
 * @param args
 * @returns {*}
 */
export function variadic(args) {
    if (Array.isArray(args[0])) {
        return args[0];
    }

    return args;
};
