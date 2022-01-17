function miniMaxSum(arr) {
    // Write your code here
    const arr1 = arr.sort((a,b) => a-b);
    const revArr = arr.slice().reverse();
    
    arr1.pop();
    revArr.pop();

    const minVal = arr.reduce(function (acc,cur) {
        return acc += cur;
    });
    const maxVal = revArr.reduce(function (acc,cur) {
        return acc += cur;
    });
    console.log(minVal, maxVal);
}
