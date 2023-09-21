function solution(id_pw, db) {
    // 아이, 비번 일치 => return 'login'
    // 로그인 실패 => 아이디 일치회원x => 'fail' / 아이디일치 but 비번일치x => return 'wrong pw'
    var answer = '';
    
    for(let i = 0; i < db.length; i++) {
        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) answer = 'login'
        else if(id_pw[0] !== db[i][0] && id_pw[1] !== db[i][1]) answer = 'fail'
        else if(id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) answer = 'wrong pw'
        
    }
    return answer
}