// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 문제풀이 DP - Top to bottom
// 순간이동은 지나온 거리에 x2 만큼 지나올수 있다, 즉 1 만큼 앞으로만 가도 무한으로 앞으로 갈 수 있지만 1에서 2배를 계속 곱하면 짝수가 된다.
// 그렇기 때문에 n 이 홀수 일경우 그만큼 앞으로 가야한다.

function solution(n) {
    let ans = 0;

    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n -= 1;
            ans++;
        }
    }

    return ans;
}

console.log(solution(5));
