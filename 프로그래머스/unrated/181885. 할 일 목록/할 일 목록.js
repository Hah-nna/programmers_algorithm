function solution(todo_list, finished) {
    var answer = [];
    const newTodo = new Map([])
    
    for(let i = 0; i < todo_list.length; i++) {
        newTodo.set(todo_list[i], finished[i])
        console.log(newTodo.get(todo_list[i]))
    }

    for(let i = 0; i < newTodo.size; i++) {
        if(!newTodo.get(todo_list[i])) {
            answer.push(todo_list[i])
        }
    }
    return answer
}