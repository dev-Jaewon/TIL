// 문제 : 프로그래머스 ( 디펜스 게임 )
// https://school.programmers.co.kr/learn/courses/30/lessons/142085

function solution(n, k, enemy) {
    let row = 0,
        high = enemy.length,
        answer = 0;

    const search = (mid) => {
        // mid (arr중간) 값이 k보다 크면 2진탐색 범위의 최소 값 위치를 mid 값으로 범위를 줄인다
        if (mid <= k) return true;

        // enemy 배열을 2진탐색 중간만큼 자른다
        const arr = enemy.slice(0, mid).sort((p, c) => c - p);
        let sum = 0;

        // 문제상 k는 무조건 패스이기때문에 k 부터 시작
        for (let i = k; i < arr.length; i++) {
            sum += arr[i];

            if (n < sum) return false;
        }

        return true;
    };

    while (row <= high) {
        // 이진탐색 절반
        const mid = Math.floor((row + high) / 2);

        if (search(mid)) {
            row = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return row - 1;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
