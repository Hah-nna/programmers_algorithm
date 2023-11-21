function solution(my_string) {
    const convertedStr = [...my_string].map((val) => {
        return val === val.toLowerCase() ? val.toUpperCase() : val.toLowerCase()
    })
    
    return convertedStr.join('')
}