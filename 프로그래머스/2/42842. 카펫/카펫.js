function solution(b, y) {
    var answer = [];
    /*
    width >= height
    전체 타일 수 : b + y
    */
    const total = b + y
    
    for(let height = 1; height <= Math.sqrt(total); height++) {
       
        if(total % height === 0) {
            const width = total / height
            
            if((width - 2) * (height-2) === y) return [width, height]
        
        }
        
        
    }
}