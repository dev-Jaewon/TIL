import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;

public class study_14 {
    public static void main(String[] args) {
        // int a = solution(6, 3, 3, 6);

        int[] a = new int[]{1,2,3};

        int[] a2 = Arrays.stream(a).map(v -> v > 1 ? v * 2 : v).toArray();

        System.out.println(a);

        System.out.println(a2);

    }

    public static int solution(int a, int b, int c, int d) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int v : new int[]{a,b,c,d}){
            if(map.containsKey(v)) map.replace(v, map.get(v) + 1);
            else map.put(v, 1);
        }
        
        int max = Collections.max(map.values());
        
        ArrayList<Integer> maxArr = new ArrayList<>();
        ArrayList<Integer> lowArr = new ArrayList<>();
        
        
        for(int v : map.keySet()){
            if(map.get(v) == max) maxArr.add(v);
            else lowArr.add(v);
        }

                System.out.println(maxArr);

        
        if(lowArr.size() == 0) return 1111 * maxArr.get(0);
        else if(lowArr.size() == 1) return (int)Math.pow(10 * maxArr.get(0) + lowArr.get(0),2);
        else if(lowArr.size() == 2) return lowArr.get(0) * lowArr.get(1);
        else return Collections.min(lowArr);
    }
}
