const bcrypt = require('bcrypt')

const saltRounds = 10

exports.hashPw = (pw) => {
    return bcrypt.hashSync(pw, saltRounds)
}

exports.comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw) 
}

