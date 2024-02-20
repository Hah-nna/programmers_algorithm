function solution(chicken) {
    let serviceChicken = chicken;
    let coupon = 0;
    while(serviceChicken > 1) {
       serviceChicken = serviceChicken / 10
        coupon += serviceChicken
    }
    return Math.trunc(coupon)
    
}