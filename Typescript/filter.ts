declare interface Array<T> {
    /**
     * mdn 구문
     * arr.filter(callback(element[, index[, array]])[, thisArg])
     */
    filter<U>(
        callbackFunction: (element: T, index: number, array: T[]) => Boolean,
        thisArg?: any
    ): U[];
}

// 제네릭 U 는 리턴타입을 위해 작성한걸로 반황 타입을 제네릭 U 의 배열로 나타낸다.
// filter 첫번째 parameter로 콜백 함수를 받는다. 그리고 콜백함수의 return 타입은 filter은 return 타입이 boolean 값으로 데이터를 필터 하기떄문에 boolean 으로 해준다
// 그외 콜백 함수의 parameter을 보면 element는 순회하는 데이터인 제네릭 T 이고 index는 number 현재 array를 나타내는 3번째 parameter는 제네릭 T[] 로 나타낸다

const result = [1, 2, "학생"].filter<string>((value, i, arr) => {
    console.log(arr);

    return typeof value === "string";
});

console.log(result);
