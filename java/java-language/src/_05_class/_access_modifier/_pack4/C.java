package _05_class._access_modifier._pack4;

import _05_class._access_modifier._pack3.A;

public class C {
    public void method(){
        A a = new A();

        // 필드 변경
        a.field1 =11;
//        a.field2 =22; // default 필드 -> 다른 패키미이므로 에러
//        a.field3 =33; // private 필드 -> 컴파일 에러

        a.method1();
//        a.method2(); // default 메서드 -> 다른 패키지이므로 컴파일 에러
//        a.method3(); // private 메서드 -> 컴파일 에러

    }
}
