function solution(s) {
    var answer = '';
    // s를 소문자로 변경
    // split으로 배열화
    // 각 밸류의 0번째값이 문자인지 확인
    // 문자라면 대문자로 바꾸기
    
    let arr = s.toLowerCase().split(' ')
    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i][0]) === 'string') {
          arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }
    return arr.join(' ')
}