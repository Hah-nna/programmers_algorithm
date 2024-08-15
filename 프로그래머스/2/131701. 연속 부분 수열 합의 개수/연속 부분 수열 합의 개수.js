// function solution(elements) {
//     const n = elements.length;
//     const arr = [...elements, ...elements];
//     const set = new Set();

    
//     for(let len = 1; len <= n; len++) {
//         let sum = 0
        
//         for(let j = 0; j < len; j++) {
//             sum += arr[j]
//         }
//         set.add(sum)
        
//         for(let k = 1; k < n; k++) {
//             sum = sum - arr[k - 1] + arr[k + len - 1]
//             set.add(sum)
            
//         }
//     }
//     return set.size;
// }

function solution(elements) {
    const circular = [...elements, ...elements]
    const set = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < elements.length; j++) {
            sum += circular[i + j];
            
            set.add(sum);
            
        }
    }
    return set.size;
}