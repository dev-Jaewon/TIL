package SpringBoot;

public class study_02 {
    public static void main(String[] args) {
        // Rest APi? 서버의 자원을 클라이언트에 구애받지 않고 사용할 수 있게 하는 설계 방식. 
        // 서버에서 보내는 응답이 특정 기기에 종속되지 않도록 모든 기기에서 통용될 수 있는 데이터를 방환.

        // API? application을 간편하게 사용할 수 있는 미리 정해진 약속. 콜라를 누르면 콜라, 사이다를 누르면 사이다를 누는것 처럼
        // 자판기의 버튼처럼 api는 약속한 http 요청에 따른 json 데이터로 응답해주는 약속이다.

        // JSON(javascript Object Notation)? 과거에는 xml을 많이 사용했지만, 최근에는 JSON으로 통일 되는 추세이다.
        
        // XML 데이터 형식
        // <article-form>
        //     <id>1</id>
        //     <title>가나다라</title>
        //     <content>마바사아</content>
        // </article-form>

        // JSON 데이터 형식
        // {
        //     "id": 1,
        //     "title": "가나다라",
        //     "content": "마바사아"
        // }

        // REST API 상태코드
        // 클라이언트가 보낸 요청에 대한 상태를 알려주는 코드
        // 100 - 요청 처리중
        // 200 - 요청 처리 완료
        // 300 - 요청 완료를 위해 추가 행동이 필요
        // 400 - 클라이언트의 잘못된 요청으로 처리 실패
        // 500 - 서버의 문제로 처리 실패
    }
}
