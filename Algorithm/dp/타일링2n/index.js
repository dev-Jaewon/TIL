// 백준 https://www.acmicpc.net/problem/11726

// 풀이 : 타일은 일정한 길이 이상이면 모양이 반복적이게 된다.
// 2*1 경우 : 1개

//    ㅣ
//    ㅣ

// 2*2 경우 : 2개

// ㅣㅣ
// ㅣㅣ

// ㅡㅡ
// ㅡㅡ

// 3:2 경우 :

// ㅣㅡㅡ
// ㅣㅡㅡ

// ㅣㅣㅣ
// ㅣㅣㅣ

// ㅡㅡㅣ
// ㅡㅡㅣ

// 2개일때는 1개일 때의 모양 하나가 중복생성이되고, 그리고 3개이상 부터는 2*1 과 2*2의 모양이 연속적으로 생성이된다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let num = +fs.readFileSync(filePath).toString();

const dp = {
    1: 1,
    2: 2,
};

for (let i = 3; i <= num; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[num]);
