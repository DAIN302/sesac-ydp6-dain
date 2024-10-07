package codingon.spring_boot_default.controller._02_restapi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RestController {
    /// ==== Template 렌더링 ====
    // GET localhost:PORT/ 요청 시 _02_restapi/req.html 이 브라우저에 렌더링
    // node.js 에서 res.render() 와 유사한 역할
    @GetMapping("/")
    public String getReq(){ return "_02_restapi/req";}

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

    @GetMapping("/introduce/{name}")
    public String getIntroduce1(@PathVariable String name, Model model){
        model.addAttribute("name", name);

        return "_02_restapi/introduce";
    }


    @GetMapping("/introduce")

    public String getIntroduce2(@RequestParam(value="name") String name, @RequestParam(value="age") int age, Model model){

        // view 에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/introduce";
    }

}
