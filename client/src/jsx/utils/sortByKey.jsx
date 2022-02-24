export const sortByKey = (array, key, lowerKey) => {
    return array.sort((a, b) => {
        let x, y;
        if (lowerKey) {
            x = a[key][lowerKey];
            y = b[key][lowerKey];
        } else {
            x = a[key];
            y = b[key];
        }
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}