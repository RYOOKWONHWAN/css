let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33];

function process(arr) {
    let data = [];
    for (let element of arr) {
        if (element % 3 == 0) {
            data.push(element);
        }
    }
    return data;
}
console.log(process(arr));

function a(arr) {
    return process(arr).length;
}
console.log(a(arr));

function b(arr) {
    let sum = 0;
    for (let element of process(arr)) {
        sum = sum + element;
    }
    return sum;
}
console.log(b(arr));
