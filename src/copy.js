function cloneDeep(obj){
    if( typeof obj !== 'object' || Object.keys(obj).length === 0 ){
        return obj
    }
    let resultData = {};
    return recursion(obj, resultData)
}

function recursion(obj, data={}){
    for(let key in obj){
        if( typeof obj[key] == 'object' && Object.keys(obj[key].length>0 )){
            data[key] = recursion(obj[key])
        }
        else{
            data[key] = obj[key]
        }
    }
    return data
}
let obj={
    arr: [{a:1,f:{q:1}}, 2, 3],
    obj: {
        key: 'value'
    },
    func: function(){
        return 1;
    }
};
let obj2 = cloneDeep(obj);
console.log(obj);
console.log(obj2);
console.log(obj===obj2);
