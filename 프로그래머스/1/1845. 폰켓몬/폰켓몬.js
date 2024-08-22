function solution(nums) {
    var answer = 0;
    const n = nums.length / 2
    nums = nums.sort((x,y) => x - y)
    const set = new Set([...nums])
    
    // {321}
    // {324}
    // {32}
    for(let i = 0; i < n; i++) {
        console.log("a1", answer)
        if(set.size < n) {
            return set.size
            break;
        } else {
            answer++
        // console.log("a2", answer)
        if(answer === n) break;    
        }
        
    }
    // console.log(set)
    
    return answer
}