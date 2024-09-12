// 제거한 요소의 다음번째 요소에서 k번째 요소만 어떻게 빼올지 고민해봐도 안 되어서 강사님의 풀이법을 이해하는 시간을 가졌음
// queue 자료구조도 해보니까 재밌당

function solution(n, k) {
  let answer = 0;

  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    // queue의 길이가 0이면 멈춤(거짓이라)
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
      // 큐 배열에 맨 앞의 요소를 꺼내서 다시 푸쉬함
    }
    queue.shift();
    // for문이 끝나면 큐의 맨 앞의 요소(k번째 요소)를 푸쉬하지 않고 그냥 제거함

    if (queue.length === 1) answer = queue.shift();
    // 만약 큐의 길이가 1이면 큐에서 꺼내 answer에 할당함
  }

  return answer;
}

console.log(solution(8, 3));

// 다시 풀어본 방법
// 큐를 안 씀 ㅎ...
function solution(n, k) {
  let q = Array.from({ length: n }, (v_, i) => i + 1);
  let idx = 0;

  while (q.length > 1) {
    idx = (idx + k - 1) % q.length;

    q.splice(idx, 1);
  }
  return q[0];
}
