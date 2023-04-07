# Lower / Upper Bounder

![](https://velog.velcdn.com/images/app235naver/post/7a2d7470-306b-47fd-bf85-2470d040c84f/image.png)

이진 탐색 알고리즘에는 여러가지가 있다.

그 중 `lower bounder` 와 `upper bounder`에 대해 학습을 해보았다.

> lower bounder

정렬 리스트에서 연속된 숫자가 있을 경우 첫번째 자리의 값을 찾는 알고리즘이다.

일반적으로 우리가 정렬된 리스트에서 값을 찾을 때 사용하는 이진 탐색 알고리즘인거 같다.

-   찾는 같이 없을 경우 그 값보다 큰 값의 인덱스를 반환한다.(이 방법을 사용해서 upper bound대신 사용해보았다.)

```js
const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9];

const loop = (low, high, value) => {
    const mid = Math.floor((low + high) / 2);

    if (low > high) return low;

    if (arr[mid] < value) low = mid + 1;
    else high = mid - 1;

    return loop(low, high, value);
};

console.log(loop(0, arr.length - 1, 6));
```

> upper bounder

정렬 리스트에서 연속된 숫자가 있을 경우 `찾을려고 하는 값보다 큰 값`을 반환할 떄 사용한다.

```js
const arr = [1, 2, 3, 4, 5, 7, 8, 9];

const loop = (low, high, value) => {
    const mid = Math.floor((low + high) / 2);

    if (low >= high) return low;

    if (arr[mid] <= value) low = mid + 1;
    else high = mid;

    return loop(low, high, value);
};
console.log(loop(0, arr.length - 1, 6));
```
