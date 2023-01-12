// 출처 https://school.programmers.co.kr/learn/courses/30/lessons/150370

// 풀이 방식: 문제에서 한달 기준을 28로 잡아줘서 날짜를 쉽게 계산할 수 있었다.

function solution(today, terms, privacies) {
    const option = terms.reduce(
        (p, [a, _, ...b]) => ((p[a] = +b.join("") * 28), p),
        {}
    );

    const numToday = (date) => {
        const [year, month, day] = date.split(".");
        return +year * 12 * 28 + +month * 28 + +day;
    };

    const numToToday = numToday(today);
    const res = [];
    for (let i = 0; i < privacies.length; i++) {
        const [date, op] = privacies[i].split(" ");

        if (numToday(date) + option[op] - 1 < numToToday) res.push(i + 1);
    }
    return res;
}
console.log(
    solution(
        "2020.01.01",
        ["Z 3", "D 5"],
        [
            "2019.01.01 D",
            "2019.11.15 Z",
            "2019.08.02 D",
            "2019.07.01 D",
            "2018.12.28 Z",
        ]
    )
);
