import java.util.Scanner;

public class study_07 {
    public static void main(String[] args) {
        String str = "test";
        
        String repeatStr = str.repeat(2);
        System.out.println(repeatStr);

        // String.repeat(int) 해당 문자만큼 반복

        // -----------------------------------------------------
        
        // 문자열 대소문자 반전
        
        Scanner sc = new Scanner(System.in);
        String inStr = sc.next();
        // 문자 입력

        char[] charArr = inStr.toCharArray();
        for(int i=0; i<charArr.length;i++){
            charArr[i] = Character.isLowerCase(charArr[i]) ? Character.toUpperCase(charArr[i]) : Character.toLowerCase(charArr[i]);
            // Character의 메소드 중 소문자를 확인하는 isLowerCase() 메소드를 확인하여 문자 대소문자 반전
        }

        System.out.println(new String(charArr));

    }
}
