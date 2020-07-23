export const mapEach2Values = (array, callback) => {
    const resultArray = [];
    for (let index = 0; index < array.length; index += 2) {
        resultArray.push(callback([array[index], array[index + 1]], index, array));
    }
    return resultArray;
}

