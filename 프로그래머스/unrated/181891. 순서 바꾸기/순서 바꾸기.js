function solution(num_list, n) {
    const otherNum = num_list.splice(n)
    return [ ...otherNum , ...num_list]
}