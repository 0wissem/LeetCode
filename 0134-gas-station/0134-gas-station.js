/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    let start = undefined
    let sum = 0
    let tour = false
    const starts = [];
    for (let i=0;i<gas.length;i++){
        // init
        if(start==undefined){
            start=i;
            if(starts.indexOf(i)===-1)starts.push(i)
            else {
                if (tour)return -1
            }
                
            sum=gas[i]
        }

        if(start!=undefined){
            if(i!==start){
                sum=sum+gas[i]-cost[i===0?gas.length-1:i-1]
                
            }else{
                sum=gas[i]
            }
                
        }
   
        if( sum<cost[i]){
            if (tour) {
                return -1;
            }
            sum=0;
            start=undefined;
            tour=false
        }
    
        if(tour && i===start){

            if(sum<cost[i]){
                return -1
            }
            return start
        }
        
        if(!tour && i===cost.length-1){
             if(start===undefined){
                 
                 return -1
             }
            tour=true
            i=-1

        }
        
        if(starts.length===gas.length && start===undefined)return -1
        }


};