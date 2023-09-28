import java.util.Arrays;
import java.util.stream.Stream;

public class study_11 {
    public static void main(String[] args) {
        // 람다란?
        // 람다 함수는 함수형 프로그래밍에서 사용되는 개념으로 익명함수라고도 한다.
        // java 8 버전 부터 지원되며, 불필요한 코드를 줄이고 가독성을 향상 시키는 것을 목적으로 두고있다.

        // Stream 은 람다를 활용할 수 있는 기술 중 하나다. stream은 데이터의 흐름이다. 배열 or 컬렉션 인스턴스에 여개 함수를
        // 조합해서 원하는 결과를 필터링하고 가공된 결과를 얻을 수 있다.
        // 또 다른 장점으로는 쓰레드를 이용하여 병렬처리가 가능하다는 점이다.

        int[] intArr = {1,2,3};
        Stream<Integer> intStream = Arrays.stream(intArr).boxed();

        intStream.forEach(v -> System.out.println(v));

        String[] strArr = {"a", "B", "c"};
        Stream<String> strStream = Arrays.stream(strArr);

        // Stream 데이터로 변환하기 위해서는 참조형 타입이어야한다. int와 같은 원시타입(primitive type)은 boxed method 이용하여
        // 참조타입으로 변환해야한다.

        String a = "abc";
        String b = "abc";

        System.out.println(a.hashCode());
        System.out.println(b.hashCode());
        // https://inpa.tistory.com/entry/JAVA-%E2%98%95-String-%ED%83%80%EC%9E%85-%ED%95%9C-%EB%88%88%EC%97%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-String-Pool-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%B9%84%EA%B5%90
        
        // String 데이터의 불변성 - String 타입은 참조형 타입으로 Heap 영역에 데이터가 저장이된다.
        // 또한 String 변수의 데이터가 변경 된다면 기존 Heap 영역이 아닌 새로운 Heap 영역의 주소값에 데이터가 저장된다.
        
        // String 타입의 메모리 절약방법
        // String 타입으로 변수를 선언하는 방법으로 리터럴 값으로 할당하거나, new 키워드를 이용하여 변수를 선언하는 방법이있다.
        // String 리터럴로 변수를 선언 했을 경우 힙의 String constants Pool 영역에 저장이 되어 동일한 데이터 값일 경우에
        // 재사용이 되어 메모리가 절약된다.
        // but 그러나 new 키워드를 사용하여 동일한 데이터를 담은 변수가 있다면 서로 다른 메모리 주소값을 가지고 있기 떄문에
        // 무분별한 사용은 오히려 메모리 누수의 원인이 될 수 있다.
    }
}
