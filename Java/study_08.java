import java.util.ArrayList;

class Solution {
    public static void main(String[] args) {
    
        // 배열은 선언한 데이터 숫자 이상으로 넣으면 에러가 발생한다.
        // 이러한 불편한 상황을 해결할 수 있는 방법이 java collection framwork의 기능중 하나인 ArrayList를 사용하면 된다.

        ArrayList list = new ArrayList();
        
        // 추가할 떄는 add 를 활용한다.
        list.add("one");
        list.add("two");

        // String str = list.get(0);

        // get method를 이용하여 one 이라는 String 데이터를 Array에서 가져올 수 있다. 하지만 오류가 발생한다.
        // ArrayList의 add method 를 이용하여 데이터를 넣게되면 데이터 타입의 조상인 object 타입으로 등록이된다.
        // 그렇기 때문에 꺼낼 때는 형 변환을 해야한다.
        String str = (String)list.get(0);

        // 옛날 방식 지금은 Generic 을 이용한다.
        ArrayList<String> list2 = new ArrayList<String>();
        // list2에 등록되는 데이터 타입은 Sring이라는 타입이다라고 명시해준다.

        list2.add("one");
        // list2.add(2); 입력 데이터가 정수이기 때문에 에러가 발생한다.

        String GenericStr = list2.get(0);        
    }
}