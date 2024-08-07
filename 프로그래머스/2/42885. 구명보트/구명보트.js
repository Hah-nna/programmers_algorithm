function solution(people, limit) {
    var count = 0;
    let p1 = 0
    let p2 = people.length - 1  
    people.sort((x,y) => x - y)
    // [50 50 70 80]
    // [50 70 80]
    
    while(p1 <= p2) {
        let sum = people[p1] + people[p2]
        if(sum <= limit) {
            p1++
            p2--
        } else p2--
        
        count++
    }
    
    return count
}