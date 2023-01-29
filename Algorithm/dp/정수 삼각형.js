// 백준 https://www.acmicpc.net/problem/1932

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [cnt, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

if (arr.length === 1) return console.log(arr[0]);

const dp = [+arr[0], arr[1].split(" ").map((v) => +v + +arr[0])];

for (let i = 2; i < arr.length; i++) {
    const nums = arr[i].split(" ").map((v) => +v);
    const temp = [dp[i - 1][0] + nums[0]];

    for (let j = 1; j < nums.length - 1; j++) {
        temp[j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + nums[j];
    }

    temp.push(nums[nums.length - 1] + dp[i - 1][dp[i - 1].length - 1]);
    dp.push(temp);
}

console.log(Math.max(...dp[dp.length - 1]));
