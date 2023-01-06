/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {

    
    const lengthOfK = (k+"").length

    const compare =(a,b)=>{
        if(a>b)return false
        return true
    }
    let res=0
    if(lengthOfK===1){
        for(let i=0;i<s.length;i++){
            if(s[i]>k){
                return -1
            }
        }
        return s.length
    }else{
        let i =0;
         while (i<s.length){
            const AbsNum1 = s.substring(i,i+lengthOfK)
            if(AbsNum1<k){
                res++
                i=lengthOfK+i
            }else{
                res++
                i=i+lengthOfK-1
            }
        }
    }
    return res
};