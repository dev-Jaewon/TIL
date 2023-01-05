interface Array<T> {
    /**
     * mdn 자료
     * callback
        -   accumulator
            누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.

        -   currentValue
            처리할 현재 요소.

        -   currentIndex Optional
            처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.

        -   array Optional
            reduce()를 호출한 배열.

     *  initialValue Optional
        callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
     */
    reduce<U>(
        callbackRunction: (
            acc: U,
            currentValue: T,
            index: number,
            array: T[]
        ) => U,
        initValue?: U
    ): U;
}

const sum = [1, 2, 3, 4, 5].reduce<number>((pre, cur) => pre + cur, 0);
