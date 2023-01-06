// typescript는 언어이자 컴파일러(tsc)이고, ts 코드를 js 바꿔준다.
// tsc --init 명령어로 tsconfig.json 생성
// any type을 최대한 피할것
// 기본문법
const num: number = 1;
const str: string = "문자";
const arr: number[] = [1, 2, 3];
const obj: { name: string; age: number } = { name: "jj", age: 123 };
function sumNumber(num1: number, num2: number): number {
    return num1 + num2;
}

// 유니온 타입
const info: string | number = "name";
const memberInfo: string | number = 1234;

// 템플릿 리터럴 타입
type middleNumber = 1234 | 1324;
type lastNumber = 5654 | 2222;

type phoneNumber = `010-${middleNumber}-${lastNumber}`;
// 010-1234-5654 | 010-1234-2222 | 010-1324-5654 | 010-1324-2222

// interface 타입 추가
interface User {
    name: string;
}
interface User {
    age: number;
}

const infoTestUser: User = { name: "홍길동", age: 123 };

// 제네릭
function genericTestFn<T>(value: T): T {
    return value;
}

genericTestFn<number>(10);
genericTestFn<string>("string");

// 옵셔널 - parameter 뒤에 ? 붙이면 필수가 아니게 된다.
function fnOptional(num1: number, num2?: number) {}

fnOptional(10);
fnOptional(10, 20);
