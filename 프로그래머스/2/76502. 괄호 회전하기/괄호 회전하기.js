const isValid = (array) => {
   let stack = []
   const pairs = {
       ")" : "(",
       "}" : "{",
       "]" : "["
   }
   
   for(let char of array) {
       // ()[{}]
       if("({[".includes(char)) stack.push(char)
       else if(stack.pop() !== pairs[char]){
           // (
           // ( , pairs[)] -> (, ( => 넘어감
         return false
           
       }
   }
    return stack.length === 0
}

function solution(s) {
    var answer = 0
    // }]()[{}]()[{
    const arr = [...s, ...s]
    const len = s.length
    for(let i = 0; i < len; i++) {
        if(isValid(arr.slice(i, i + len))) answer++
        // 0, 6 -> }]()[{
        // 1, 7 -> ]()[{}
        // 2, 8 -> ()[{}]
        
    }
    
    return answer
}