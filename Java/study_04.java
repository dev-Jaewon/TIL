public class study_04 {
    public static void main(String[] args) {
        // 배열
        // java에서는 한가의 타입의 배열을 담을 수 있는 배열 (js는 다른 타입도 담을 수 있음)
        // java에서는 미리 배열의 크기를 정해야한다

        // 선언시 초기화
        char[] charVar = {'도', '개'};
        String[] stringVar = {"도개", "걸윷"};
        int[] setIntVar = {1, 2, 3};

        // 선언
        char[] setCharVar = new char[3];

        // 데이터 할당
        setCharVar[0] = 'a';
        setCharVar[1] = 'b';
        setCharVar[2] = 'c';
        // setCharVar = {'a', 'b', 'c'}; //불가능

        String[] stringVar2 = new String[] {"string_data1", "string_data2"};


        // java의 배열을 늘리거나 줄일 수 없다.
        // 그러고 싶을 경우 List와 같은 collector를 이용를 한다
    }
}
