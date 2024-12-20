package _05_class._interface._02;

// 전화 기능을 위한 인터페이스
interface Phone {
    void makeCall(String number);
    void answerCall();
}

// 인터넷 기능을 위한 인터페이스
interface InternetDevice {
    void browseWeb(String url);
    void sendEmail(String address, String content);
}

// 카메라 기능을 위한 인터페이스
interface Camera {
    void takePhoto();
    void recordVideo();
}

// 다중 인터페이스 구현
// - 구현 객체는 여러 개의 인터페이스를 implements 할 수 있음
class SmartPhone implements Phone, InternetDevice, Camera {
    @Override
    public void takePhoto() {
        System.out.println("사진을 촬영합니다");
    }
    public void recordVideo() {
        System.out.println("동영상을 촬영합니다");
    }
    public void browseWeb(String url) {
        System.out.println(url+"에 접속합니다");
    }
    public void sendEmail(String address, String content) {
        System.out.println(address+"에 이메일을 보냅니다 : " + content);
    }
    public void makeCall(String number) {
        System.out.println(number+"에 전화합니다");
    }
    public void answerCall() {
        System.out.println("전화를 받습니다.");
    }
}

public class InterfaceEx03 {
    public static void main(String[] args) {
        SmartPhone smartPhone = new SmartPhone();

        smartPhone.makeCall("010-1234-5678");
        smartPhone.answerCall();

        smartPhone.browseWeb("www.example.com");
        smartPhone.sendEmail("example@example.com", "안녕");

        smartPhone.takePhoto();
        smartPhone.recordVideo();
    }
}
