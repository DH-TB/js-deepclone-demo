function clone(data) {
    if (data instanceof Object) {
        const newObj = {};
        for (let key in data) {
            newObj[key] = clone(data[key]);
        }
        return newObj;
    }
    else {
        return data;
    }
}
const obj = {
    arr: [{a:1,f:{q:1}}, 2, 3],
    obj: {key:'value'},
    string:'hello world'
};
const obj1 = clone(obj);
// console.log(obj1);
//
// const obj2 = Object.assign({}, obj);
// console.log(obj2);
// console.log(obj2===obj1);
