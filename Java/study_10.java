import java.util.Arrays;

public class study_10 {
    public static void main(String[] args) {
            
      System.out.println(solution(new int[]{0, 1, 2, 4, 3}, new int[][]{{0, 4, 2},{0, 3, 2},{0, 2, 2}} ));
        
    }

    public static int[] solution(int[] arr, int[][] queries) {
        int[] res = new int[queries.length];
        Arrays.fill(res, -1);
        
        for(int j=0; j<queries.length; j++){
            int[] temp = Arrays.copyOfRange(arr, queries[j][0], queries[j][1]+1);
     
            Arrays.sort(temp);
            
            for(int i=0; i<temp.length; i++){
                if(temp[i] > queries[j][2]){
                    res[j] = temp[i];
                    break;
                }
            }

        }
    
        return res;
    }

    // java 알고리즘 https://school.programmers.co.kr/learn/courses/30/lessons/181923
}
