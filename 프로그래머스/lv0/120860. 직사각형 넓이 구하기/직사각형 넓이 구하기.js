function solution(dots) {
    let xArr = []
    let yArr = []
    
    for(const [x,y] of dots) {
        xArr.push(x)
        yArr.push(y)
    }
    
    let xMax = Math.max(...xArr)
    let xMin = Math.min(...xArr)
    let yMax = Math.max(...yArr)
    let yMin = Math.min(...yArr)
    
    return (xMax - xMin) * (yMax - yMin)
}