public class study_05 {
    public static void main(String[] args) {
        // 배열 참조 자료형
        
        // 이중배열 선언
        // 크기가 같은 배열들이 나란히 들어간다
        String[][] dbStringArr = new String[3][3];
        

        // 이중배열 선언 및 초기화
        // 이럴 경우 다른 크기의 배열을 넣을 수 있다.
        // 가장 아랫쪽 배열은 원시 데이터의 하나 하나가 직접 메모리에 들어간다!!!!!! ★★★★★★★
        // 하지만 외부의 배열은 안쪽 배열이 위치한 메모리 주소값이 들어간다. ★★★★★★★
        String[][] dbStringArr2 = new String[][] {
            {"가나", "다라"},
            {"마바", "사아", "자차"}
        };

        // 1111 메모리 주소 : {"가나", "다라"}
        // 2222 메모리 주소 : {"마바", "사아", "자차"}
        // dbStringArr2 = {메모리 주소 1111, 메모리 주소 2222}

        String str1 = dbStringArr2[0][0];
        String[] strArr = dbStringArr2[1];

    }
}
