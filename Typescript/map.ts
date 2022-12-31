declare interface Array<T> {
    /**
     * mdn 구문
     * arr.map(callback(currentValue[, index[, array]])[, thisArg])
     */
    map<U>(
        callbackFunction: (currentValue: T, index?: number, array?: T[]) => U,
        thisArg?: any
    ): U[];
}

// 제네릭 T는 배열의 입력 타입이고, 이건 배열을 순회하면서 반환하는 currentValue와 현재 배열을 반환하는 callback 함수의 3번째 parapmeter와 일치하지만 3번째 parameter은 배열 타입으로 한다
// 제네릭 I는 반환 타입으로 return 배열의 타입의 제네릭 I로 했다.
// 그뢰 index 타입을 number, 그외 thisArg는 어떤게 올지 모르므로 any로 했다.

[1, 2, "1"].map<number>((v) => (typeof v === "string" ? Number(v) : v));
