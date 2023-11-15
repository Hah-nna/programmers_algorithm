function solution(my_string, is_suffix) {
 // return my_string.indexOf(is_suffix, my_string.length - is_suffix.length) === -1 ? 0 : 1
// 6 - 3 = my_string[3] 부터 있는지 검색하고 인덱스 반환 -> 3 -> 1
// 6 - 3 = 3 my_string[3] 부터 있는지 검색하고 인덱스 반환 -> -1(false) -> 0
// 6 - 4 = 2 my_string[2] 부터 있는지 검색하고 인덱스 반환 -> -1(false) -> 0
// 6 - 7 = -1 my_string[-1]인데 문자열에서 사용될때는 0번째부터 검색하고 인덱스 반환 -> -1(false) -> 0
    
    return my_string.endsWith(is_suffix) ? 1 : 0
}