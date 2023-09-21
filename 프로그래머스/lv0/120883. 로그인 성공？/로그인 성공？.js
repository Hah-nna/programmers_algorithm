function solution(id_pw, db) {
  // 아이, 비번 일치 => return 'login'
  // 로그인 실패 => 아이디 일치회원x => 'fail' / 아이디일치 but 비번일치x => return 'wrong pw'
  var answer = "";

  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) answer = "login";
    else if (id_pw[0] !== db[i][0] && id_pw[1] !== db[i][1]) answer = "fail";
    else if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1])
      answer = "wrong pw";
  }
  return answer;
}

// 디스트럭처링
function solution(id_pw, db) {
  const [userId, userPw] = id_pw;
  for (const [dbId, dbPw] of db) {
    if (userId === dbId && userPw === dbPw) return "login";
    else if (userId === dbId && userPw !== dbPw) return "wrong pw";
  }

  return "fail";
}

// Map 사용
function solution(id_pw, db) {
  const [userId, userPw] = id_pw;
  const dataBase = new Map(db);

  if (dataBase.has(userId)) {
    if (dataBase.get(userId) === userPw) return "login";
    else return "wrong pw";
  } else return "fail";
}

// Map + 삼항 연산자
function solution(id_pw, db) {
  const [userId, userPw] = id_pw;
  const dataBase = new Map(db);

  return dataBase.has(userId)
    ? dataBase.get(userId) === userPw
      ? "login"
      : "wrong pw"
    : "fail";
}
