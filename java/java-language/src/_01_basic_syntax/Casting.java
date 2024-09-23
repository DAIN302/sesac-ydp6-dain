package _01_basic_syntax;

// 형 변환
// 데이터 타입을 변환
// (type)변수
// type : 변경하려는 데이터 타입 / 변수 : 변수 이름
public class Casting {
    public static void main(String[] args) {
        // 묵시적 형변환(wider conversion)
        // 더 작은 타입에서 더 큰 타입으로의 자동 형변환
        // 반대의 경우에는 묵시적 형변환 불가 -> 명시적으로 변환해야함
        int smallNumber = 10;
        System.out.println("smallNumber >> " + smallNumber);
        double bigNumber = smallNumber; // int를 double로 자동 형변환
        // int는 32bit, double은 64bit 그래서 묵시적 형변환 가능
        System.out.println("bigNumber >> " + bigNumber);

        // 명시적 형변환(narrow conversion)
        // 더 큰 타입에서 작은 타입으로의 형변환
        double anotherBigNumber = 20.5;
        System.out.println("anotherBigNumber >> " + anotherBigNumber);
        int anotherSmallNumber = (int) anotherBigNumber; // double을 int로 형변환
        // 괄호로 명시적으로 타입을 적어줘야함
        System.out.println("anotherSmallNumber >> " + anotherSmallNumber);

        // 주의할 점 : 명시적 형변환의 경우 데이터 손실이 발생할 수 있음
        int largeNumber = 1000;
        System.out.println("largeNumber >> " + largeNumber);
        byte smallByte = (byte) largeNumber;
        System.out.println("smallByte >> " + smallByte); // -24 출력 -> byte 입장에서 1000은 십진수로 바꿨을 때, -24다.

    }
}
