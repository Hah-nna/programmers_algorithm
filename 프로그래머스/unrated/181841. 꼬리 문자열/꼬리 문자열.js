function solution(str_list, ex) {
    const filteredStr = str_list.filter((val) => {
        return !val.includes(ex)
    })
    
    return filteredStr.length > 0 ? filteredStr.join('') : ""
}