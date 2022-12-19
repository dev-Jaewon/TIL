// 이진탐색 문제 : 입국심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

// 풀이 생각
// 문제 읽고 제한사항에 입국심사 기다리는 사람  1,000,000,000명, 심사관 100,000명을 일 때 dfs bfs 등 재귀 알고리즘은 생각하지 않는게 좋다
// 이진탐색을 방법을 사용한다면 어떻게 풀어야할까 생각해보았다
// 이진탐색 범위에 대해 생각을 하면 최소값 = 0 , 최대값은 = 모든 사람이 가장 오래걸리는 심사관을 이용할 경우
// 이진탐색 중간 시간 mid = (최소값 + 최대값) / 2
// 이진탐색 조건문 :
// 최대값이 가장 오래걸리는 심사관(10분)에게 6명이 몰린 경우라면, 또 다른 심사관(7분)과 같이 한다면
// 60분에 ( 60/10 = 6명 ) + ( 60/7 = 8명 ) = 60분에 14명을 처리할 수있다
// 이 조건을 이용하여 이진탐색 조건을 만들고 이진탐색 low, high 값을 줄인다

function search(n, mid, arr) {
    const cnt = arr.reduce((pre, cur) => pre + Math.floor(mid / cur), 0);

    if (n <= cnt) {
        return true;
    } else {
        return false;
    }
}

function solution(n, times) {
    let low = 0,
        high = Math.max(...times) * n;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (search(n, mid, times)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

console.log(solution(6, [7, 10]));
