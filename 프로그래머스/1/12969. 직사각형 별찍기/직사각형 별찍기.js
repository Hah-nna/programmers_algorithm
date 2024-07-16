process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer = ''
    // 2중 for of 돌기
    // * 더하기
    // 안쪽 포문에 \n 더하기
    
    // a = 5, b = 3
    for(let i = 0; i < b; i++) {
        for(let j = 0; j < a; j++) {
            answer += '*'
        }
        answer += '\n'
    }
    
    
    console.log(answer)
});