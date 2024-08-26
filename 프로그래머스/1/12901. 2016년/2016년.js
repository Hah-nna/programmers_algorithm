// function solution(a, b) {
    
//     const dates = {
//         0 : "SUN",
//         1 : "MON",
//         2 : "TUE",
//         3 : "WED",
//         4 : "THU",
//         5 : "FRI",
//         6 : "SAT"
//     }
//     const date = new Date(`2016-${a}-${b}`).getDay()
//     return dates[date]
// }

function solution(a, b) {
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
    const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    let days = b
    for(let i=0 ; i<a-1 ; i++)
        days += monthDay[i];

    return weekDay[days%7];
}
