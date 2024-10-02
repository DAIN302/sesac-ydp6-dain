package _08_collection._list;

// 자료형이 Book 인 ArrayList 를 위한 클래스
public class Book {
    // 필드
    private String title;
    private String author;

    // 생성자
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                '}' + '\n';
    }
}
