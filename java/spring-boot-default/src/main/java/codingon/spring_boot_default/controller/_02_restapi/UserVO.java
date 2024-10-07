package codingon.spring_boot_default.controller._02_restapi;

import lombok.Getter;

@Getter
public class UserVO {
    private String name;
    private int age;
}

// VO 객체 특징
// - 불변(immutable) 객체
// - setter 메서드 없음
// - 비즈니스 로직 가질 수 있음
