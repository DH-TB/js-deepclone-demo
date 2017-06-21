const _ = require('lodash');
let obj = {
    string: 'hello',
    arr: [1, 2, 3],
    obj: {
        key: 'value'
    },
    func: function () {
        return 1;
    }
};
let obj1 = _.clone(obj);
let obj2 = _.cloneDeep(obj);
console.log(obj.arr === obj1.arr);
console.log(obj.obj === obj1.obj);
console.log(obj.string == obj1.string);
console.log(obj.func() === obj1.func());

console.log(obj.arr === obj2.arr);
console.log(obj.obj === obj2.obj);
console.log(obj.string == obj2.string);
console.log(obj.func() === obj2.func());

console.log(obj === obj1);
console.log(obj === obj2);

