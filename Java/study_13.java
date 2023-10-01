import java.util.HashMap;
import java.util.ArrayList;
import java.util.Collections;

public class study_13 {
    public static void main(String[] args) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        int[] list = {2,2,2,2};
        for(int i=0; i<list.length; i++){
            if(map.containsKey(list[i])) map.replace(list[i], map.get(list[i])+1);
            else map.put(list[i], 1);
        }
        
        System.out.println(map);

        // HashMap Method
        map.put(3, 5); // key value 데이터 추가
        map.put(1,11);
        map.put(132,442213);

        map.get(3); // key의 value 값 가져오기

        map.containsKey(3); // key값 존재 여부;

        map.containsValue(4); // Value 값 존재 여부;

        map.forEach((k,v) -> {
            System.out.println(k + " = " + v);
        });

        // System.out.println(new ArrayList<>(map.keySet());
        System.out.println(Collections.max(new ArrayList<>(map.keySet())));

        // String data to char[]
        String str = "abcdefg";
        char[] chrArr = str.toCharArray(); // String의 toCharArray() 메소드를 이용하여 char[]변환

        System.out.println(str);

        char[] charList = str.toCharArray();
        ArrayList<Character> strList = new ArrayList<>();
            
        for(int i=0; i<charList.length; i++){
            strList.add(charList[i]);
        }
            
        System.out.println(strList.toString());
    }
}
