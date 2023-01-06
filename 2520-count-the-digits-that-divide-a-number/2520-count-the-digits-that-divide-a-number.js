/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let digits=[]
    let _num = num
    while(num>0){
        const digit=num%10
        digits.push(digit)
        num= Math.floor(num/10)
    }
    let res=0
    for (let i of digits){
        if(_num%i===0)res++
    }
    return res
};