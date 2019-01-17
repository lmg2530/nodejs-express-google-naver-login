# nodejs-express-google-naver-login
nodejs-login study
-- NODE Ver : v 8.11.2
-- Google login

 1. google cloude platform 에서 프로젝트 생성 후 사용자 인증 정보를 가저온다.
![1](https://user-images.githubusercontent.com/29029016/51290663-b9941280-1a47-11e9-9ecb-72eefbbfcc60.PNG)
2.사용자 인증 정보 만들기에서 oAuth 클라이언트 ID를 선택한다.
![2](https://user-images.githubusercontent.com/29029016/51290664-b9941280-1a47-11e9-9062-3eeb76c87156.PNG)
3.클라이언트 ID를 만들기 위해서는 동의 화면이 필요한데 이를 위한 설정을 한다.(-->동의 화면 구성)
![3](https://user-images.githubusercontent.com/29029016/51290665-ba2ca900-1a47-11e9-9950-dd6ed68787a2.PNG)
4.최소한 이름은 넣어야 동의 화면 구성이 구성이 된다.
![4](https://user-images.githubusercontent.com/29029016/51290667-ba2ca900-1a47-11e9-85f5-0e698fe4c956.PNG)
5. 클라이언트 아이디를 만들기 위해 해당 애플리케이션 종류를 선택 한다.
![5](https://user-images.githubusercontent.com/29029016/51290668-ba2ca900-1a47-11e9-8ed3-b111044bd312.PNG)
6. 생성이 되면 아래와 같이 키가 생성된다.
![6](https://user-images.githubusercontent.com/29029016/51291211-bc900280-1a49-11e9-8061-a7331a3debaa.jpg)
7. 리다이렉션을 위해 해당 키에 callback 주소를 등록해줘야 한다.
![7](https://user-images.githubusercontent.com/29029016/51291212-bc900280-1a49-11e9-99bd-7a43281fffa5.PNG)

참조 : https://developers.google.com/identity/sign-in/web/sign-in

-- Naver login
1.네이버로 로그인을 이용하기위해 아래와 같이 api 신청을 한다.
-- https://developers.naver.com/apps/#/register?api=nvlogin
![n_ 4](https://user-images.githubusercontent.com/29029016/51291481-a59de000-1a4a-11e9-84ff-cce99e17a53d.PNG)
![n_ 1](https://user-images.githubusercontent.com/29029016/51291483-a59de000-1a4a-11e9-87fb-d6bef078e5e5.PNG)
2.아래와 같이 api 사용위 위한 클라이언트 id와 키가 생성된다.
![n_ 3_](https://user-images.githubusercontent.com/29029016/51292491-3924e000-1a4e-11e9-9f83-1e7cd2eaa301.jpg)
3.아래와 같은 창을 볼 수 있다.
![n_ 3](https://user-images.githubusercontent.com/29029016/51291486-a6367680-1a4a-11e9-9b1b-25709a27ea5d.PNG)

참조 : https://developers.naver.com/docs/login/web/#2--javascript%EB%A1%9C-%EB%84%A4%EC%9D%B4%EB%B2%84-%EC%95%84%EC%9D%B4%EB%94%94%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
