package _05_class._interface._01;

public class Television implements RemoteControl {
    // 필드
    private int volume;

    // 인터페이스의 추상메서드 구현
    @Override
    public void turnOn(){
        System.out.println("TV 를 킵니다.");
    }

    public void turnOff(){
        System.out.println("TV 를 끕니다.");
    }

    public void setVolume(int volume){
        // 매개값으로 들어온 volume 의 값 제한
        if(volume > RemoteControl.MAX_VOLUME){
            this.volume = RemoteControl.MAX_VOLUME;
        } else if(volume < RemoteControl.MIN_VOLUME){
            this.volume = RemoteControl.MIN_VOLUME;
        } else {
            this.volume = volume;
        }
        System.out.println("현재 TV 볼륨 : " + this.volume);
    }
}
