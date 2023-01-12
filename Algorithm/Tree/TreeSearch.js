// https://www.acmicpc.net/problem/1991
// 백준 1991

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [cnt, ...restArr] = fs.readFileSync(filePath).toString().split("\n");

const tree = {};

for (let i = 0; i < restArr.length; i++) {
    const [data, left, right] = restArr[i].split(" ");

    tree[data] = {
        left,
        right,
    };
}

let res = "";

const preOrder = (node) => {
    if (node === ".") return;

    res += node;

    preOrder(tree[node].left);
    preOrder(tree[node].right);
};

const bfsLevel = (node) => {
    const queue = [node];
    let levelRes = "";

    while (queue.length) {
        const data = queue.shift();

        if (data === ".") continue;

        const { left, right } = tree[data];

        levelRes += data;

        queue.push(left);
        queue.push(right);
    }

    console.log(levelRes);
};

let postRes = "";
const postOrder = (node) => {
    if (node === ".") return;

    const { left, right } = tree[node];

    postOrder(left);
    postOrder(right);

    postRes += node;
};

let inOrderRes = "";
const inOrder = (node) => {
    if (node === ".") return;

    const { left, right } = tree[node];

    inOrder(left);
    inOrderRes += node;
    inOrder(right);
};

preOrder("A");
console.log(res);

// bfsLevel("A");
inOrder("A");
console.log(inOrderRes);

postOrder("A");
console.log(postRes);
