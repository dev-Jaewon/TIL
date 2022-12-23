function solution(board, skill) {
  const temArr = Array.from(Array(board.length + 1), () =>
    Array(board[0].length + 1).fill(0)
  );
  let res = 0;

  skill.forEach((cur) => {
    const [type, r1, c1, r2, c2, degree] = cur;
    //type = 1 공격, 2 = 치유

    if (type === 1) {
      temArr[r1][c1] += -degree;
      temArr[r1][c2 + 1] += degree;
      temArr[r2 + 1][c1] += degree;
      temArr[r2 + 1][c2 + 1] += -degree;
    } else {
      temArr[r1][c1] += degree;
      temArr[r1][c2 + 1] += -degree;
      temArr[r2 + 1][c1] += -degree;
      temArr[r2 + 1][c2 + 1] += +degree;
    }
  });

  for (let i = 0; i < temArr.length - 1; i++) {
    for (let j = 0; j < temArr[0].length - 1; j++) {
      temArr[i][j + 1] += temArr[i][j];
    }
  }

  for (let i = 0; i < temArr[0].length - 1; i++) {
    for (let j = 0; j < temArr.length - 1; j++) {
      temArr[j + 1][i] += temArr[j][i];
    }
  }

  for (let i = 0; i < temArr.length - 1; i++) {
    for (let j = 0; j < temArr[0].length - 1; j++) {
      if (temArr[i][j] + board[i][j] > 0) res += 1;
    }
  }

  return res;
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
