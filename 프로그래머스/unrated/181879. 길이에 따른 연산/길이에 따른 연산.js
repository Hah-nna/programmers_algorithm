function solution(num_list) {
    let a = 0;
    if(num_list.length >= 11) {
        for(item of num_list) {
            a += item;
            
        }
    } else {
        a = 1;
        for(item of num_list) {
            a = a * item
        }
    }
    return a
}