const { Team, Player } = require('../models/index');
const { Op } = require("sequelize");

exports.getTeams = async (req,res) => {
    try {
        //console.log(req.query);
        const {sort, search} = req.query
        let teams

        if(sort === 'name_asc'){
            // 이름 기준 오름차순 정렬
            teams = await Team.findAll({
                attributes : ['team_id','name'],
                include : {
                    model : Player,
                    attributes : ['name', 'player_id']
                },
                order : [['name', 'ASC']], // ORDER BY `Team`.`name` ASC;
            })
        } else if(search){
            teams = await Team.findAll({
                attributes : ['team_id','name'],
                include : {
                    model : Player,
                    attributes : ['name', 'player_id']
                },
                where : {
                    name : {[Op.like]: `%${search}%`} // LIKE '%KT%';
                }
            })
        } else {
            // 전체 팀 조회
            teams =  await Team.findAll({
                attributes : ['team_id','name'], // SELECT `team_id`, `name` FROM `Team` AS `Team`;
                include : {
                    model : Player,
                    attributes : ['name', 'player_id']
                }
            })
        }       
        res.json(teams);
        // res.render('teams')
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}
// 특정 팀 조회
exports.getTeam = async (req,res)=>{
    try {
        //console.log(req.params.team_id);
        const { team_id } = req.params;

        const team = await Team.findOne({
            include : {
                model : Player,
                attributes : ['name', 'player_id']
            },
            where : {team_id}
        })
        
        res.json(team)
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}

// 특정 팀 조회 + 선수 조회
exports.getTeamPlayers = async (req,res)=>{
    try {
        //console.log(req.params.team_id);
        const { team_id } = req.params;

        const team = await Team.findOne({
            where : {team_id},
            include : [{model : Player}]
        })
        res.json(team)
    } catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error')
    }
}