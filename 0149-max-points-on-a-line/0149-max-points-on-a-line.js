/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let eqs=[]
    let memo={}
    function eq(pt1,pt2){
        const a = (pt2[1]-pt1[1])/(pt2[0]-pt1[0])
        const b = pt1[1]- a * pt1[0]
        // if(!memo[a]){
        //     memo[a]=a
        // }
        // if(!memo[a][b])memo[a][b]=b
        if(Math.abs(a)===Infinity){
           return {a:Infinity,b:pt1[0],points:[pt1,pt2]}  
        }
        return {a,b,points:[pt1,pt2]} 
    }
    function checkIsNewPoint (pt,pts){
        for(let i=0;i<pts.length;i++){
            if(pt[0]===pts[i][0]&&pt[1]===pts[i][1]) return false
        }
        return true
    }
    function updateEqs(_eq,pt1,pt2,index){ // {a,b,tot}
        const e = eqs[index]
        if(checkIsNewPoint(pt1,e.points)){
            e.points=[...e.points,pt1]
        }
        if(checkIsNewPoint(pt2,e.points)){
            e.points=[...e.points,pt2]
        }
        eqs[index]=e
    }
    
    
    for(let i=0;i<points.length;i++){
        for (let j=i+1;j<points.length;j++){
            const _eq=eq(points[i],points[j])
            const find_index = eqs.findIndex((e)=>e.a===_eq.a && e.b===_eq.b)
            if(find_index>-1){
                updateEqs(_eq,points[i],points[j],find_index)
            }else{
               eqs.push(_eq) 
            }

            
        }
    }
    let max = 1
    for (i of eqs){
        if(i.points.length>max)max = i.points.length
    }
    
   return max
};