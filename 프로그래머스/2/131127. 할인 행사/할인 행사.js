const isSignup = (want, number, arr) => {
    const list = new Map()
    const compare = new Map()
    // 사야할 리스트와 수량 셋팅
    for(let i = 0; i < want.length; i++) {
        list.set(want[i], number[i])
    }
    
    for(let j = 0; j < arr.length; j++) {
        compare.set(arr[j], (compare.get(arr[j]) || 0) + 1)
    }
    // compare와 list 비교해서 key가 없거나 value가 부족하면 false, 아니면 true
    
    for(const [key, value] of list) {
        if(!compare.has(key) || compare.get(key) !== list.get(key)) return false
        // console.log(key, value)
    }
    return true
}

function solution(want, number, discount) {
    var answer = 0;
    // 객체 만들어서 밸류로 값 셋팅
    // 디스카운트를 순회 0 ~ i < 디스카운트 길이 
    // 슬라이딩 윈도우 방식으로 하나씩 슬라이딩
    // 슬라이딩한 배열에 각 제품들이 몇 번 나왔는지 객체에 넣기
    // 만약 객체와 비교해서 제품이 없거나(길이가 다르거나) 혹은 밸류가 다르면 return false
    // 맞으면 answer++
    
    for(let i = 0; i < discount.length; i++) {
        if(isSignup(want, number, discount.slice(i, i+10))) answer++
        
    }
    // console.log(list)
    // 	Map(5) {
    /*
  'banana' => 3,
  'apple' => 2,
  'rice' => 2,
  'pork' => 2,
  'pot' => 1
}
*/
    return answer
}