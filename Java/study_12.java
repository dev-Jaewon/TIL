import java.util.ArrayList;

public class study_12 {
    public static void main(String[] args) {
        
    }

    public int[] solution(int start_num, int end_num) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        for(int i=start_num; i<=end_num;i++){
            list.add(i);
        }

        String str = list.get(0).toString();

        
        return list.stream().mapToInt(i -> i).toArray();
        



    }

    // Integer 타입과 int 타입의 차이란?
    // int 타입은 primitive(원시형) 타입이다.
    // Integer 타입을 설명하기 전에 Wrapper class에 대해서 설명이 필요하다. Wrapper class는 단어 그대로
    // 감싼다는 의미를 가지고 있고 각 원시형 자료형 마다 사용할 수 있는 Wrapper calss가 존재한다
    // Wrapper class는 참조형 자료형이다. 즉 기본형 자료형을 객체(wrapper class)로 다루기 위해서 사용하기 위해서다.
    
    // 박싱(boxing)이란 원시타입 primitive type을 wrapper class로 감싸는 것을 말한다.
    Integer i = 10;
    // 자동 박싱이 된다. java 9 버전이후로는 new Integer(10);을 하지 않아도 auto  boxing이 된다.

    int boxing = i.intValue();
    int autoBoxing = i;
    // Integer type의 변수에 intValue() method를 활용해서 변환을 하지 않아도 자동으로 unboxing이 된다.

    // 이유?
    // 컬렉션 프레임워크는 객체만 저장할 수 있다. ( List, Set, Map )
    // wrapper class는 기본 타입 + null 값도 저장할 수 있다
}
