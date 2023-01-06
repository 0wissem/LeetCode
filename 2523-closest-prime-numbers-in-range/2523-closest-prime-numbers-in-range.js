/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {

    const isPrimary = (num)=>{
        for (let i=2;i<num;i++){
            if(num%i===0)
            return false
        }
        return true
    }
    let primaries= []
    console.log("h;dlf,ere")

    for (let i=left;i<=right;i++){
        if(i===1)i++
        if(isPrimary(i)){
            if(primaries.length){
                const lastPrimary = primaries[primaries.length-1]
                if(i-lastPrimary<=2)return [lastPrimary,i]
            }
            primaries.push(i);
        }
    }
    if(primaries.length<2) return [-1,-1]
    let minInterval = null
    let index = 0
    for (let i=1;i<primaries.length;i++){
        if(!minInterval){
           minInterval = primaries[i]-primaries[i-1]
            index = 1
        }
        else if(primaries[i]-primaries[i-1]<minInterval){
            minInterval = primaries[i]-primaries[i-1]
            index=i
        }
    }
    return [primaries[index-1],primaries[index]]
   
    

    
};