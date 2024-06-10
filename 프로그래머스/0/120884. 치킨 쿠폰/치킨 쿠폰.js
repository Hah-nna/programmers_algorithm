// function solution(chicken) {
//     let serviceChicken = chicken;
//     let coupon = 0;
//     while(serviceChicken > 1) {
//        serviceChicken = serviceChicken / 10
//         coupon += serviceChicken
//     }
//     return Math.trunc(coupon)
    
// }

function solution(chicken) {
    let answer = 0;
    let coupon = chicken 

    while(coupon >= 10){
        answer = answer + parseInt(coupon/10) 
        coupon = parseInt(coupon/10)+ coupon%10  
    }

    return answer;
}