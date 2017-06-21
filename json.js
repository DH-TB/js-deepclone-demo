function deepClone(source){
    return JSON.parse(JSON.stringify(source));
}
const o1 = {
    arr: [{a:1,f:{q:1}}, 2, 3],

    obj: {
        key: 'value'
    },
    func: function(){
        return 1;
    }
};
const o2 = deepClone(o1);
console.log(o1);
console.log(o2);