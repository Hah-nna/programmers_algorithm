// 내가 푼 방법
// function solution(people, limit) {
//     var count = 0;
//     let p1 = 0
//     let p2 = people.length - 1  
//     people.sort((x,y) => x - y)
//     // [50 50 70 80]
//     // [50 70 80]
    
//     while(p1 <= p2) {
//         let sum = people[p1] + people[p2]
//         if(sum <= limit) {
//             p1++
//             p2--
//         } else p2--
//         count++
//     }
    
//     return count
// }


// 다른 사람이 푼 방법
function solution(people, limit) {
    let answer = 0
    people.sort((x, y) => x - y)
    // [50 50 70 80]
    let i = 0
    for(let end = people.length - 1; i < end; end--) {
        // i가 end보다 작지않거나 같으면 루프 끝        
        if(people[i] + people[end] <= limit) i++
        // 50 + 80 = 130 (end = 3)
        // 10 + 70 = 120 (end = 2)
        // 50 + 50 = 100 => i = 1, 
        // i = 1, end = 1 => !(i < end) => for문 끝 
        
    }
    return people.length - i
}