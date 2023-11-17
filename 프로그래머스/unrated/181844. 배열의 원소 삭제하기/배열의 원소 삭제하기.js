function solution(arr, delete_list) {
    // delete를 순회함
    // 각 요소가 arr에 있는지 확인하고 인덱스를 찾음
    // 인덱스 찾으면 arr에서 바로 삭제함(splice)
    // 최종적으로 arr 리턴
    
    for(let i = delete_list[delete_list.length - 1]; i >= 0; i--) {
        let idx = arr.indexOf(delete_list[i]) 
        if(idx > -1) {
            arr.splice(idx, 1)
        }
    }
    return arr
    }
