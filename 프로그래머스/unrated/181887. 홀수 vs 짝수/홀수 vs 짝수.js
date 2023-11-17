function solution(num_list) {
    let odd = 0;
    let even = 0;
    
   const a = num_list.map((val, idx) => {
        return idx % 2 === 0 ? odd += val : even += val
    })
   
   return odd === even ? odd : Math.max(odd, even)
}