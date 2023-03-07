// 유닛테스트중 옵셔널한 데이터만 parameter로 받아서 사용하고 싶었다.
// typescript docs에나 chat gpt로 찾거나 물어보니 Require 유틸리티 타입만 알려주었다.
// Required 타입은 모든 옵셔널 타입들은 Required한 타입으로 바꿔주는 유틸리티 타입이다

// 결국 Required 타입이나 Optional 타입만 가져오기 위해서는 타입을 생성해줘야한다.

type Person = {
    name: string;
    age: number;
    adress?: string;
    phon?: string;
};

export type GetOptionalType<T> = {
    [K in keyof T as undefined extends T[K] ? K : never]: T[K];
};

export type GetRequiredType<T> = {
    [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};

type RequiredPerson = GetRequiredType<Person>;
// type RequiredPerson = {
//     name: string;
//     age: number;
// }

type OptionAlPerson = GetOptionalType<Person>;
// type OptionAlPerson = {
//     adress?: string | undefined;
//     phon?: string | undefined;
// }
