public class study_15 {
    public static void main(String[] args) {
        // String Method
        String str = "HelloWorld";
        String str2 = new String("HelloWorld");
        // https://www.w3schools.com/java/java_ref_string.asp

        str.charAt(0); //.charAt() index 위치의 단어 추출;
        str.concat("stringData"); //문자열 뒤에 string 데이터 추가;
        str.contains("Hello"); // 문자열 사이에 해당 문자열 여부;
        
        System.out.println(str == str2); // 문자열 비교시 참조 데이터 주소값을 기준으로 비교하기 때문에 false 출력
        str.equals(str2); // String 데이터 값을 비교하기 위해서는 equals method를 이용하여 비교

        str.indexOf("ll"); // 찾으려고 하는 문자열의 index 위치를 알려준다.
        str.isEmpty(); // 공백 유무를 boolean 타입으로 리턴
        str.length(); // 문자열 길이 반환

        str.replace("He", "aa"); // 해당 문자열 변경
        str.toUpperCase(); // 대문자
        str.toLowerCase(); // 소문자
        str.trim(); // 좌우 공백 제거
        str.split(""); // 문자열을 특정값 기준으로 자르기
    }
}
