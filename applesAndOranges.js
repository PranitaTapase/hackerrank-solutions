function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const applePostion = apples.map(elem => a+elem).reduce((acc, cur) => (cur >= s && cur <= t ? acc+1 : acc),0 );;
    const orangePosition = oranges.map(elem => b+elem).reduce((acc, cur) => (cur >= s && cur <= t ? acc+1 : acc),0 );;;
    console.log(applePostion);
    console.log(orangePosition);
}
countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])
