function solution(my_string) {
    let numArr = my_string.match(/\d+/g)
    if(!numArr) return 0
    return numArr.reduce((pre, cur) => pre + Number(cur), 0)
}

