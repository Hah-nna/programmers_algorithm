function solution(cacheSize, cities) {
      
    var time = 0;
    const arr = []
    
    // cacheSize가 0일떄
    if(cacheSize === 0) return cities.length * 5
    
    //LRU
    
    for(const city of cities) {
    const lowerCity = city.toLowerCase(); 
        
    let idx = arr.findIndex(c => c.toLowerCase() === lowerCity);
    
    if(idx > -1) {
        arr.splice(idx, 1)
        arr.push(city)
        time += 1
    } else {
            // 시티가 없으면
      if(arr.length >= cacheSize) {
      arr.shift()   
      }
            
            arr.push(city)
            time += 5
            
        }
        
    
    }
    
    
    return time
}