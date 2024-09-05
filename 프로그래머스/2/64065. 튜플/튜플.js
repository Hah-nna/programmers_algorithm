function solution(s) {
    var answer = [];
    const tupleMap = new Map()
    const a = s.slice(2, -2).split("},{").join(',').split(',')
    
    for(let num of a) {
           tupleMap.set(num, (tupleMap.get(num) || 0) + 1)
    }
    
    let maxValue = 0; 
    let maxKey;
    
    
   const sortedArray = Array.from(tupleMap).sort((a, b) => b[1] - a[1]);
   for(let key of sortedArray) {
       answer.push(+key[0])
   } 
    
    return answer
}