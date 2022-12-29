// 백준 : https://www.acmicpc.net/problem/16953

// 풀이 : 만약 최종값 기준 1의 자리가 1이었다면 전과정이 1을 붙인 과정이 될것이다
// 그렇기 때문에 2로 나누면서 1의자리가 1이 될때마다 한자리씩 빼주는 과정을 진행하면된다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [start, end] = fs.readFileSync(filePath).toString().split(" ");

console.log(dp(+start, +end));

function dp(a, b) {
    let cnt = 0;
    while (a < b) {
        if (b % 10 === 1) {
            b = Math.floor(b / 10);
        } else {
            b = b / 2;
        }
        cnt += 1;
    }
    return a === b ? cnt + 1 : -1;
}
