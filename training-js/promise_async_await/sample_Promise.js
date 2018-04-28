let promise = new Promise(resolve => {
    console.log('start the promise now.')
    resolve(1)
});
promise.then(res => {
    console.log('then A: ','res=',res);
    return res+1;
}).then(res => {
    console.log('then B: ','res=',res);
    return res*2;
}).then(res => {
    console.log('then C: ','res=',res);    
});