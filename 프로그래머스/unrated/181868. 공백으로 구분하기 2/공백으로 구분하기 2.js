function solution(my_string) {
    const a = my_string.trim().replaceAll(/[" "]+/g, ',')
    return a.split(",")
}