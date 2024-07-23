function solution(s, n) {
  // var answer = '';
  // chatAtCode()에다가 n만큼 더한 값을 answer에 더하기
  // 빈 값은 공백더하기
  // 대문자 : 65 ~ 90, 소문자 : 97 ~ 122
  // for(let i of s) {
  //     // 대문자
  //     if(i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
  //         // Z면 64 + n
  //         // z면 96 + n
  //     answer += (i.charCodeAt() === 90 ? String.fromCharCode(64 + n) :
  //                 String.fromCharCode(i.charCodeAt() + n))
  //         // 소문자
  //     } else if(i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
  // answer += (i.charCodeAt() === 122 ? String.fromCharCode(96 + n)
  //            : String.fromCharCode(i.charCodeAt() + n))
  //         // 공백
  //     } else if(i === " ") answer += ' '
  // }
  // return answer
  // => 입출력 테스트 1,2,3은 통과하지만 다른 테스트들은 통과 x
  // 알파벳 범위를 넘어섰을 때 알파벳이 순환하고 있지 않음 지금은 z, Z에 대해서만 순환시키고 있음

  return s
    .split("")
    .map((val) => {
      if (val === " ") return " ";

      const code = val.charCodeAt();
      const isUpperCase = code >= 65 && code <= 90;
      const base = isUpperCase ? 65 : 97;

      return String.fromCharCode(((code - base + n) % 26) + base);
      // +n : n만큼 이동
      // %26 : 알파벳 범위(알파벳은 26개니까)를 넘어가면 다시 처음(0)으로 돌아가게 하려고
      // 26으로 나눈 나머지를 구함으로써, 항상 0에서 25 사이의 값(알파벳 위치값)을 얻게 됨. 이는 정확히 알파벳의 위치에 해당함
      // 마지막에 +base를 하는 이유는 다시 원래의 아스키코드 범위로 되돌리기 위해서임
    })
    .join("");
}
