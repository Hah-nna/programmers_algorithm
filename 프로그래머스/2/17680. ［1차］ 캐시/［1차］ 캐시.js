function solution(cacheSize, cities) {
      
    var time = 0;
    const arr = []
    
    if(cacheSize === 0) return cities.length * 5
    
    for(const city of cities) {
    const lowerCity = city.toLowerCase(); 
        
    let idx = arr.findIndex(c => c.toLowerCase() === lowerCity);
    
    if(idx > -1) {
        arr.splice(idx, 1)
        arr.push(city)
        time += 1
    } else {
      if(arr.length >= cacheSize) {
      arr.shift()   
          }
            arr.push(city)
            time += 5   
        }
    }
    return time
}