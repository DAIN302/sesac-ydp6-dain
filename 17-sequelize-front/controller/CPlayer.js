// 선수와 관련된 컨트롤러 모음
const { Player, Profile, Team } = require('../models/index')

// 전체 선수 조회
exports.getPlayers = async (req,res) => {
    try {
        console.log(req.params);
        const players = await Player.findAll({
            include : [
                {
                    model : Team,
                    attributes : ['name']
                }
            ] // join
        }); // select * from Player; 
        res.send(players)
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// id로 특정 선수 조회
exports.getPlayer = async (req,res) => {
    try {
        console.log(req.params);
        const { player_id } = req.params
        
        //select * from Player where player_id = 1; 
        const player = await Player.findOne({
            where : {player_id}, // {player_id : player_id}
            include : [
                {
                    model : Profile,
                    attributes : ['position', 'type']
                }
            ] // join
            
        })
        res.json(player)
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// 선수 추가
exports.postPlayer = async (req, res) =>{
    try {
        console.log(req.body);
        const { name, age, team_id } = req.body;
        const newPlayer = await Player.create({
            name, age, team_id
        });
        res.json(newPlayer)
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 선수의 소속 팀 변경
exports.patchPlayer = async (req, res) => {
    try {
       const { player_id } = req.params;
       const { team_id } = req.body;
       const updatedPlayer = await Player.update(
            // set 무엇을 바꿈?
            { team_id }, 
            // where 누구를 바꿈?
            { where : {player_id}} 
       );
       console.log(updatedPlayer);
       res.json(updatedPlayer);
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 선수 방출(삭제)
exports.deletePlayer = async (req,res) =>{
    try {
        const { player_id } = req.params;
        // DELETE FROM `Player` WHERE `player_id` = '1'
        const isDeleted = await Player.destroy({
            where : { player_id }
        })
        console.log('삭제됨?',isDeleted?'yes':'no');
        if(isDeleted) {
            return res.send(true)
        } else {
            return res.send(false)
        }
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}



