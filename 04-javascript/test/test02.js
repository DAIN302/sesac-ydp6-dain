function multifly(a,b) {
    return a*b
}

// console.log(multifly(3,7))
// console.log(multifly(2,2))

const square = (x) => console.log(x**2)

// square(4)
// square(11)
// square(5)

let age = prompt('나이를 입력해주세요')

function ageGroup(age){
    if(age >= 20) {
        return "성인"
    } else if(age >= 17) {
        return "고등학생"
    } else if(age >= 14) {
        return "중학생"
    } else if(age >= 8) {
        return "초등학생"
    } else if(age >= 0) {
        return "유아"
    } else {
        return "0이상 입력해주세요"
    }
}

console.log(ageGroup(age));
