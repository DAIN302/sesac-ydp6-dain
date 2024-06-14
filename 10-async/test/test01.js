
function call(name, cb) {
    setTimeout(function() {
        console.log(name);
        cb(name);
    }, 1000);
}

function back(cb) {
    setTimeout(function() {
        console.log('back');
        cb('back');
    }, 1000)
}

function hell(cb) {
    setTimeout(function() {
        cb('callback hell');
    }, 1000);
}

/*
call('kim', function (name) {
    console.log(name + '반가워');
    back(function (txt) {
        console.log(txt + '을 실행했구나');
        hell(function (message) {
            console.log('여기는' + message);
        });
    });
});
*/


function call1(name){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(name);
        }, 1000);
    })
}

function  back1(txt) {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(txt)
        }, 1000);
    })
}

function hell1(msg) {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(msg)
        }, 1000);
    })
}
/*
call1('kim').then(res=>{
    console.log(res);
    console.log(res + '반가워');
    return back1('back');
}).then(res=>{
    console.log(res);
    console.log(res + '을 실행했구나');
    return hell1('callback hell')
}).then(res=>{
    console.log('여기는' + res);
})
*/


function call2(name){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            console.log(name);
            res(name);
        }, 1000);
    })
}

function  back2(txt) {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            console.log(txt);
            res(txt)
        }, 1000);
    })
}

function hell2(msg) {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(msg)
        }, 1000);
    })
}

async function exec() {
    let name = await call2('kim')
    console.log(name + '반가워');
    let back = await back2('back')
    console.log(back + '을 실행했구나');
    let msg = await hell2('callback hell')
    console.log('여기는'+msg);
}

exec();





