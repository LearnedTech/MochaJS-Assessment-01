const initialData = { a: 1, b: 2 };
const newData = { ...initialData, c: 3 };

function spreadObjects(initialData, newProperty) {
    const newData = { ...initialData, ...newProperty };
    return newData;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

export { spreadObjects, squaredNumbers };