// class -> object 를 만들 수 있는 틀
// 정해진 틀로 같은 규격의 오브젝트 여러 개 생성 가능
class House {
    // 생성자 함수, 객체의 속성(내부에서 사용할 변수) 부여
    constructor(name, year, window){
        this.name = name;
        this.year = year;
        this.window = window;
    }
    // 객체 메서드
    getAge(){
        console.log(`${this.name}는 건축한지 ${2024 - this.year} 년 되었어요`);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window} 개 입니다`);
    }
}

const house1 = new House('롯데',1990, 1) 
// 클래스를 이용해서 인스턴스를 생성 시 constructor에 선언된 매개변수대로 값을 지정해야 함
// console.log(house1, typeof house1);
// console.log(house1.year);
// house1.getAge()
// house1.getWindow()

// 클래스의 상속
// extends 키워드 사용
class Apartment extends House {
    constructor(name, year, window, floor,windowMaker) {
        // 부모의 속성을 가져올 때는 super() 키워드로 가져오고 ()내부에 매개변수를 적어줘야함
        super(name, year, window)
        this.floor = floor
        this.windowMaker = windowMaker
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
    }
    // 자식이 같은 이름의 메서드를 가지고 있으면 상속된 부모의 메서드는 덮어쓰기 되서 사실상 삭제됨 -> override
    getWindow(){
        return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다`;
    }
}

const apt1 = new Apartment('래미안', 2022, 3, 20, 'kcc')
// console.log(apt1, typeof apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());

