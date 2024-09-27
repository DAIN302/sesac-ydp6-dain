package _05_class._access_modifier._pack5;

public class SingletonEx {
    public static void main(String[] args) {
//        Singleton s1 = new Singleton();
        // 생성자를 private로 했기 때문에 new 생성자를 다른 클래스에서 사용 불가 -> 컴파일 에러

        // 정적 메소드 호출로 싱글톤 객체 얻기
        Singleton s2 = Singleton.getInstance();
        Singleton s3 = Singleton.getInstance();

        // 동일한 객체란? 참조가 동일한 것
        if(s2 == s3){
            System.out.println("같은 singleton 객체");
            System.out.println(s2);
            System.out.println(s3);
        } else {
            System.out.println("다른 singleton 객체");
        }
    }
}
