let olimpic_newgame : readonly [object, boolean] = [
    {
        name : '쇼트트랙',
        type : '혼성 계주',
    }, 
    true,
]

// olimpic_newgame[1] = false; error

// console.log(olimpic_newgame);

type olimpicType = readonly [object, boolean]

let olimpic_newgame2 : olimpicType =  [
    {
        name : '쇼트트랙',
        type : '혼성 계주',
    }, 
    true,
]

// olimpic_newgame2[1] = false;
console.log(olimpic_newgame2);


