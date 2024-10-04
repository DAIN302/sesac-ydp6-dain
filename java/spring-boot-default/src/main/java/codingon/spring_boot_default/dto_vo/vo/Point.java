package codingon.spring_boot_default.dto_vo.vo;

// final class
// - final class 는 상속 불가능 -> 불변성 보장

import java.util.Objects;

// 2D 좌표를 표현하는 VO(Value Object) 클래스
public final class Point {
    // final field
    // - 한 번 초기화되면 변경 불가능
    private final int x;
    private final int y;

    // 생성자
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Getter
    // 참고. VO 객체는 setter 가 없으므로 불변성을 유지할 수 있음
    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    // 두 점 사이의 거리 계산 (비즈니스 로직)
    // VO 객체는 간단한 도메인 로직을 가질 수 있다.
    // 값과 관련된 연산이나 검증 로직 포함 가능
    public double distanceTo(Point other){
        int dx = this.x - other.x;
        int dy = this.y - other.y;
        return Math.sqrt(dx*dx + dy*dy);
    }

    // equals() : 객체의 동등성 정의 (두 객체가 논리적으로 같은지 비교)
    @Override
    public boolean equals(Object o) {
        // 현재 객체(this) 비교 대상 객체(매개변수 o) 가 같은 참조를 가리킨다면 (== 참조를 비교하는 연산자) true
        if (this == o) return true;
        // 비교 대상 객체(매개변수 o) 가 null 이거나 현재 객체와 다른 클래스의 인스턴스라면 false
        if (o == null || getClass() != o.getClass()) return false;

        // 비교 대상 객체를 Point 타입으로 형변환
        Point point = (Point) o;
        // 두 포인트 객체의 x, y 값이 모두 같은지 반환
        return x == point.x && y == point.y;
    }

    // hashCode() : 객체의 해시코드 값 생성
    @Override
    public int hashCode() {
        // Objects 클래스의 hash 메서드 사용해서 x,y 값을 기반으로 해서 해시 코드 생성
        // -> 내부적으로 해시 알고리즘을 사용해 객체의 필드값을 결합한 해시 코드 생성
        return Objects.hash(x, y);
    }
    // => 일반적으로는 equals() 메서드로 같다고 판단된 두 객체는 "반드시" 같은 hashCode 를 반환해야 함


    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                '}';
    }
}
