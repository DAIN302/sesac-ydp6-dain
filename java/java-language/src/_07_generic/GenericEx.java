package _07_generic;

import java.util.ArrayList;

// 일반 클래스
class CustomList {
    ArrayList<String> list = new ArrayList<>();

    public void addElement(String element){list.add(element);}
    public void removeElement(String element){list.remove(element);}
    public String get(int i){return list.get(i);}

    @Override
    public String toString(){
        return "CustomList = " + list;
    }
}

// 제너릭 클래스
class CustomListGeneric<T> {
    ArrayList<T> list = new ArrayList<>();

    public void addElement(T element){list.add(element);}
    public void removeElement(T element){list.remove(element);}
    public T get(int i){return list.get(i);}

    @Override
    public String toString(){
        return "CustomListGeneric = " + list;
    }
}

public class GenericEx {
    public static void main(String[] args) {
        // 1. generic 이 아닐 때
        CustomList li = new CustomList();
        li.addElement("first");
        li.addElement("second");
        li.addElement("third");
        System.out.println(li.toString());
        li.removeElement("second");
        System.out.println(li.toString());
        System.out.println(li.get(1));

        // 2. generic 일 때
        CustomListGeneric<Integer> gLi = new CustomListGeneric<>();
        gLi.addElement(3);
        gLi.addElement(6);
        gLi.addElement(157);
        System.out.println(gLi.toString());
        gLi.removeElement(6);
        System.out.println(gLi.toString());
        System.out.println(gLi.get(0));


        CustomListGeneric<Character> gLi2 = new CustomListGeneric<>();
        gLi2.addElement('A');
        gLi2.addElement('C');
        gLi2.addElement('T');
        System.out.println(gLi2.toString());
        gLi2.removeElement('C');
        System.out.println(gLi2.toString());
        System.out.println(gLi2.get(0));

        // generic 의 제일 큰 장점 : 코드 재사용성이 높아짐! 확장성이 높다.
    }
}
