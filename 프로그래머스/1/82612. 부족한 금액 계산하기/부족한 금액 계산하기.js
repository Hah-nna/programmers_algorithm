function solution(price, money, count) {
    var totalPrice = 0;
    // 3 * 1 = 3
    // 3 * 2 = 6
    // 3 * 3 = 9
    // 3 * 4 = 12 => 30
    for(let i = 1; i <= count; i++) {
        totalPrice += (price * i)
    }
    // 리턴 30 - 머니

    return totalPrice - money > 0 ? totalPrice - money : 0
}