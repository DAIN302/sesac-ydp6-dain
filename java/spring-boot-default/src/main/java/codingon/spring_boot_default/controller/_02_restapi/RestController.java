package codingon.spring_boot_default.controller._02_restapi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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

    // #4. Get Method. path variable (optional)


}
