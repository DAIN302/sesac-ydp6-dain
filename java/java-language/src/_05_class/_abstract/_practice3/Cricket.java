package _05_class._abstract._practice3;

public class Cricket extends Animal{
    public Cricket(String species, String habitat){
        super(species, habitat);
    }

    @Override
    String speak(){return "귀뚤귀뚤";}
}
