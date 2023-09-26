import java.util.Arrays;

class Study_09{
    public static void main(String[] args) {
        // 1. 배열에 데이터 추가하기
        // java 배열 복사해서 데이터 값 넣기
        // jvava 배열은 js와 다르게 배열의 크기를 정하면 바꿀 수 없다.
        // 그렇기 때문에 새로운 데이터를 추가하려면 새로운 배열을 만들어 줘야한다.
        // 그 중하나가 Arrays method 중 copyOf method를 활용해서 복사한다.

        int[] origin = new int[]{1,2,3,4};

        int[] newArrays = Arrays.copyOf(origin, origin.length);
        newArrays[newArrays.length -1] = 5;

        System.out.println(newArrays);


        // String 데이터를 char 배열에 넣기
        String str = "hellowWorld";
        char[] chrArr = str.toCharArray();
    }
}