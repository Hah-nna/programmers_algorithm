function solution(my_string) {
    // return [...my_string].filter((val) => Number(val) || val === '0').sort((x,y) => x - y).map((val) => +val)
    return my_string.match(/\d/g).sort((x,y) => x - y).map((val) => +val)
}