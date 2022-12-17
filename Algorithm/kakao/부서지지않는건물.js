// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/92344
// 제목 : 파괴되지 않는 건물

// 풀이 : 새로운 배열을 만들고, 크기는 board 보다 가로 세로 1씩 더 크게 만든다
//       [type, y1, x1, y2, x2, degree] 인자들 기준으로
//       [y1, x1] [y1, x2+1], [y2+1, x1], [y2+1,x2+1] 좌표에 스킬 숫자 만큼 작성
//       모든 스킬에 대한 4좌표에 작성 후 배열을 왼쪽에서 오른쪽으로 누적 계산, 그 후 위에서 아래로 누적 계산한다

function solution(board, skill) {
    let answer = 0;
    // board 배열 +1 크기 만큼 작성
    const arr = [...Array(board.length + 1)].map((_) =>
        Array(board[0].length + 1).fill(0)
    );

    // 스킬 [y1, x1] [y1, x2+1], [y2+1, x1], [y2+1,x2+1] 좌표에 작성
    for (let i in skill) {
        const [type, y1, x1, y2, x2, degree] = skill[i];

        if (type === 1) {
            arr[y1][x1] -= degree;
            arr[y1][x2 + 1] += degree;
            arr[y2 + 1][x1] += degree;
            arr[y2 + 1][x2 + 1] -= degree;
        } else if (type === 2) {
            arr[y1][x1] += degree;
            arr[y1][x2 + 1] -= degree;
            arr[y2 + 1][x1] -= degree;
            arr[y2 + 1][x2 + 1] += degree;
        }
    }

    // 세로
    // 위에서 아래로 누적계산
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            arr[i + 1][j] += arr[i][j];
        }
    }

    // 가로
    // 왼쪽에서 오른쪽으로 누적계산
    for (let j = 0; j < arr[0].length - 1; j++) {
        for (let i = 0; i < arr.length; i++) {
            arr[i][j + 1] += arr[i][j];
        }
    }

    // 부서지지 않은 건물 카운터 계산
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (arr[i][j] + board[i][j] > 0) answer += 1;
        }
    }

    return answer;
}

console.log(
    solution(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        [
            [1, 1, 1, 2, 2, 4],
            [1, 0, 0, 1, 1, 2],
            [2, 2, 0, 2, 0, 100],
        ]
    )
);
