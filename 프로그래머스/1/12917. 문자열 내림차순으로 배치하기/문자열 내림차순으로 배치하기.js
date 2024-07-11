function solution(s) {
    // 영문 대문자 : 65 ~ 90, 영문 소문자 : 97 ~ 122
    let lowerCase = ''
    let upperCase = ''
    
    for(let i of s) {
        let alphabet = i.charCodeAt()
        if(alphabet >= 65 && alphabet <= 90) upperCase += i
        else lowerCase += i
    }
    
    lowerCase = [...lowerCase].sort((x,y) => x > y ? -1 : 1).join('')
    upperCase = [...upperCase].sort((x,y) => x > y ? -1 : 1).join('')
    
    return lowerCase + upperCase
}