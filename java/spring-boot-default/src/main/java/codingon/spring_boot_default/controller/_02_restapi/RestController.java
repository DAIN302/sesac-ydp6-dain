package codingon.spring_boot_default.controller._02_restapi;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class RestController {
    /// ==== Template 렌더링 ====
    // GET localhost:PORT/ 요청 시 _02_restapi/req.html 이 브라우저에 렌더링
    // node.js 에서 res.render() 와 유사한 역할
    @GetMapping("/")
    public String getReq(){ return "_02_restapi/req";}
//    public String getPracReq(){ return "_02_restapi/pracReq";}


    // === GET 요청 ===
    // #1. Get Method. query string
    @GetMapping("/get/res1")
    public String getRes1(@RequestParam(value="name") String name, @RequestParam(value="age") int age, Model model){

        // req ex. /get/res1?name=김굉필&age=54

        // @RequestParam 어노테이션
        // - http 요청 파라미터를 메서드 매개변수에 바인딩
        // - query string 중에서 name key 에 대한 value 를 String name 에 매핑
        // - required=true 가 기본 값이므로 요청 url 에서 name key 를 필수로 보내야 함
        // - 필수값을 입력안하면 에러 페이지 뜬다.
        // - name input 은 빈 값으로 입력해도 에러 발생 X -> String 은 빈 문자열도 유효한 값으로 취급하기 때문에
        // 그래서 유효성 검사는 프론트와 백에서 둘 다 해야함!
        System.out.println("name "+name);
        System.out.println("age "+age);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // #2. Get Method. query string (required=false)
    @GetMapping("/get/res2")
    public String getRes2(@RequestParam(value="name", required = false) String name, Model model){
        System.out.println("name "+name);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // #3. Get Method. path variable
    @GetMapping("/get/res3/{param1}/{param2}")
    public String getRes3(@PathVariable String param1, @PathVariable(value="param2") int age, Model model){
        // @PathVariable
        // - url path variable(경로 변수) 을 사용할 때 필요
        // - 기본적으로 경로 변수는 값을 가져야 함(즉, 값이 없으면 404 error)
        // 참고. url 의 경로 변수와 해당 메서드이 매개변수명을 다르게 사용하고 싶다면,
        // @PathVariable("param2") int age 이런식으로 사용하기

        System.out.println("name "+param1);
        System.out.println("age "+age);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", param1);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }


    // #4. Get Method. path variable (optional)
    @GetMapping({"/get/res4/{name}/{age}", "/get/res4/{name}"})
    // 선택적으로 받아오는 경로 변수가 있다면, {} 안에 경로 여러 개 설정
    // 2개의 경우를 배열로 넣어줌
    public String getRes4(@PathVariable String name, @PathVariable(required = false) Integer age, Model model){
        // path variable 중에서 name(필수), age(선택) 이라면?
        // - required = false 사용 (optional 한 변수)
        // - optional 한 변수가 맨 뒤에 와야 함

        // 참고. age 변수 타입이 int 가 아닌 Integer 인 이유
        // - age (숫자형) optional 한 값이므로 null 값이 가능해야함
        // - int 는 primitive type 이므로 null 값을 가질 수 없음
        // - 따라서 reference type 인 wrapper 객체를 사용해야함

        System.out.println("name "+name);
        System.out.println("age "+age);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // GET 실습
    @GetMapping("/introduce/{name}")
    public String getIntroduce1(@PathVariable String name, Model model){
        model.addAttribute("name", name);

        return "_02_restapi/introduce";
    }

    // GET 실습
    @GetMapping("/introduce")
    public String getIntroduce2(@RequestParam(value="name") String name, @RequestParam(value="age") int age, Model model){
        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/introduce";
    }

    // === POST 요청 ===
    // #5. Post Method. form data (required=true)
    @PostMapping("/post/res1")
    public String postRes1(@RequestParam String name, @RequestParam int age, Model model){
        // @RequestParam
        // get 방식에서는 쿼리스트링 데이터가 연결, post 방식에서는 form 데이터 연결
        System.out.println("name "+name);
        System.out.println("age "+age);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }
    // #6. Post Method. form data (required=false)
    @PostMapping("/post/res2")
    public String postRes2(@RequestParam String name, @RequestParam(required = false) Integer age, Model model){
        System.out.println("name "+name);
        System.out.println("age "+age);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // #1 ~ 6 폼까지는 항상 Template view 반환
    // 하지만, Spring Boot 를 API 서버로 활용하고자 데이터 자체를 응답하고 싶다면?
    // @ResponseBody 사용

    // #7. Post Method. @ResponseBody Annotation
    @PostMapping("/post/res3")
    @ResponseBody // 메서드의 반환 값을 응답 본문 (Response body)에 직접 쓰도록 지시하는 어노테이션
    public String postRes3(@RequestParam String name, @RequestParam int age, Model model){
        // @ResponseBody
        // - 응답 시 객체를 JSON 으로 리턴할 때 사용
        // - 즉, 응답 객체를 전달 (express res.send() 메서드와 유사)

        System.out.println("name "+name);
        System.out.println("age "+age);

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 템플릿 엔진이 아닌 문자열 그 자체를 응답
        // 데이터만 전달하고 싶을 때
        return name + " " + age;
    }

    // POST 실습
    @PostMapping("/info")
    public String postInfo(@RequestParam String name, @RequestParam String gender, @RequestParam int year, @RequestParam int month, @RequestParam int day, @RequestParam String interest, Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("day", day);
        model.addAttribute("interest", interest);
        return "_02_restapi/pracRes";
    }

    // ==== DTO 이용 ====
    // #8. DTO with GET Method
    @GetMapping("/dto/res1")
    @ResponseBody
    public String dtoRes1(@ModelAttribute UserDTO userDTO){
        // @ModelAttribute UserDTO userDTO
        // - 요청 파라미터를 UserDTO 객체에 바인딩
        // - 폼 input 이름(name)을 (name, age) 이 UserDTO 필드명과 일치하면 자동 매핑
        // -> 메핑? setter 를 실행하겠다. setter 를 이용해서 필드에 값을 넣는 것
        // -> 따라서, Lombok 플러그인 설치 필요
        // -> 그렇지 않으면 롬복은 애플리케이션 실행 후에 getter, setter 를 생성하기 때문에,
        // -> 현재 시점에는 getter 가 없다고 생각해서 빨간 줄 표시한거

        System.out.println("userDTO name = " + userDTO.getName());
        System.out.println("userDTO age = " + userDTO.getAge());

        return userDTO.getName() + " " + userDTO.getAge();
    }

    // #9. DTO with POST Method (@RequestBody x)
    @PostMapping("/dto/res2")
    @ResponseBody
    public String dtoRes2(UserDTO userDTO){
        // @ModelAttribute 는 생략 가능
        // - 파라미터의 UserDTO 타입 앞에 아무것도 없으면 @ModelAttribute 어노테이션 자동 추가
        // - post 방식이므로 폼 데이터를 자동으로 UserDTO 에 바인딩
        System.out.println("userDTO name = " + userDTO.getName());
        System.out.println("userDTO age = " + userDTO.getAge());

        return userDTO.getName() + " " + userDTO.getAge();
    }

    // #10. DTO with POST Method (@RequestBody o) -> error 코드
    @PostMapping("/dto/res3")
    @ResponseBody
    public String dtoRes3(@RequestBody UserDTO userDTO){
        // @RequestBody 어노테이션
        // - 요청 본문(Request Body) 에 있는 데이터를 읽어와서 객체에 매핑
        // -> 매핑? 필드의 값을 주입(할당)
        // - 반환 값을 HTTP 본문에 직접 작성하게 하는 어노테이션
        // - 단!! 요청의 형식이 JSON 또는 XML 일 때 사용
        // // - Content-Type : application/json, application/xml 일 때 사용
        // - 하지만 여기서는 일반 폼 전송이라 조건이 틀어져서 에러가 나는 것

        // POST /dto/res3 요청의 경우 "일반 폼 전송"
        // - 즉 MIME Type 이 application/x-www-form-urlencoded
        // -> 따라서 @RequestBody 어노테이션 사용 시 오류 발생

        // 올바른 사용법
        // 1. "일반 폼 전송" 을 하고 있으니 @ModelAttribute 사용
        // 2. 클라이언트 측에서 js 코드를 사용해 폼 데이터를 json 으로 변형 -> 동적 폼 전송 구현
        System.out.println("userDTO name = " + userDTO.getName());
        System.out.println("userDTO age = " + userDTO.getAge());

        return userDTO.getName() + " " + userDTO.getAge();
    }

    // ==== VO 이용 ====
    // #11. VO with GET Method -> 에러 코드
    @GetMapping("/vo/res1")
    @ResponseBody
    public String voRes1(@ModelAttribute UserVO userVO){
        // 에러 나는 이유
        // @ModelAttribute 는 setter 를 이용해 객체에 값을 주입, VO는 setter 가 없음 -> 폼에서 전송된 데이터가 주입되지 않음
        // 그래서 초기화되지 않은 상태인 null, 0 로 응답이 온다.

        System.out.println("userVO name = " + userVO.getName()); // null
        System.out.println("userVO age = " + userVO.getAge()); // 0

        return userVO.getName() + " " + userVO.getAge();
    }

    // #12. VO with POST Method (@RequestBody x) -> 에러 코드
    @PostMapping("/vo/res2")
    @ResponseBody
    public String voRes2(UserVO userVO){
        // 어노테이션 생략하면 @ModelAttribute 되는 것
        // setter 를 이용해서 객체에 값을 주입해야 하는데, VO는 setter 가 없어서 데이터 주입 X
        System.out.println("userVO name = " + userVO.getName()); // null
        System.out.println("userVO age = " + userVO.getAge()); // 0

        return userVO.getName() + " " + userVO.getAge();
    }


    // #13. VO with POST Method (@RequestBody o) -> 에러 코드(status code 415)
    // 서버가 클라이언트로부터 받은 요청의 미디어 타입(Content-Type)을 지원하지 않거나 이해할 수 없는 경우 발생
    @PostMapping("/vo/res3")
    @ResponseBody
    public String voRes3(@RequestBody UserVO userVO){
        // @RequestBody
        // - 요청의 본문 데이터를 UserVO 객체로 변환 시도
        // -  json 이나 XML 형식이 아니라서(일반 폼 전송이라) 형식이 일치하지 않으므로
        // - Spring 이 해당 요청 본문을 UserVO 객체로 변환 불가능

        // 올바른 사용법
        // 1. "일반 폼 전송" 을 하고 있으니 @ModelAttribute 사용
        // 2. 클라이언트 측에서 js 코드를 사용해 폼 데이터를 json 으로 변형 -> 동적 폼 전송 구현
        System.out.println("userVO name = " + userVO.getName());
        System.out.println("userVO age = " + userVO.getAge());

        return userVO.getName() + " " + userVO.getAge();
    }
}
