// 맨하튼 거리 측정 문제
function solution(places) {
    let cnts = [];

    const search = (arr) => {
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[row].length; col++) {
                const char = arr[row][col];

                if (char !== "P") continue;

                // 위 한칸 P 체크
                if (row > 0 && arr[row - 1][col] === "P") return 0;

                // 위 두칸 P 체크 , 위 한칸 O 체크
                if (
                    row > 1 &&
                    arr[row - 2][col] === "P" &&
                    arr[row - 1][col] === "O"
                )
                    return 0;

                // 왼쪽 한칸 P 체크
                if (col > 0 && arr[row][col - 1] === "P") return 0;

                // 왼쪽 두칸 P 체크, 왼쪽 한칸 O 체크
                if (
                    col > 1 &&
                    arr[row][col - 2] === "P" &&
                    arr[row][col - 1] === "O"
                )
                    return 0;

                // 왼쪽 한칸 O 체크 후 , 왼쪽 위 아래 P 체크
                if (
                    col > 0 &&
                    row > 0 &&
                    row < 4 &&
                    arr[row][col - 1] === "O"
                ) {
                    if (
                        arr[row - 1][col - 1] === "P" ||
                        arr[row + 1][col - 1] === "P"
                    ) {
                        return 0;
                    }
                }

                // 오른쪽 한칸 O 체크 후 , 오른쪽 위 아래 P 체크
                if (
                    col < 4 &&
                    row < 4 &&
                    row > 0 &&
                    arr[row][col + 1] === "O"
                ) {
                    if (
                        arr[row - 1][col + 1] === "P" ||
                        arr[row + 1][col + 1] === "P"
                    ) {
                        return 0;
                    }
                }
            }
        }

        return 1;
    };

    for (let i = 0; i < places.length; i++) {
        cnts.push(search(places[i]));
    }

    return cnts;
}

console.log(
    solution([
        ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
        ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
        ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
        ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
        ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
    ])
);
