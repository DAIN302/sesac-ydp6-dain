package _05_class._abstract._practice;

public class StudentEx {
    public static void main(String[] args) {
        Kim kim = new Kim("김철수", "ABC 고등학교", 17, 20220001);
        Baek baek = new Baek("백영희", "XYZ 고등학교", 18, 20220002);

        showInfos(kim);
        System.out.println();
        showInfos(baek);
    }

    public static void showInfos(Student student){
        student.infos();
        student.todo();
    }
}
