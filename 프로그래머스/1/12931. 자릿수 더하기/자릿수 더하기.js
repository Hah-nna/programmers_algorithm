function solution(n)
{
    var answer = 0;
    let a = String(n).split('').map((val) => answer += +val)

    return answer
}