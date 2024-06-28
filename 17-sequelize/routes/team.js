// 팀과 관련된 라우터를 정의하는 파일
const express = require('express');
const controller = require('../controller/Cteam');
const router = express.Router();

// 전체 팀 조회
router.get('/', controller.getTeams);

// 특정 팀 조회
router.get('/:team_id', controller.getTeam);

// 특정 팀 조회 + 선수 조회
router.get('/:team_id/players', controller.getTeamPlayers);

module.exports = router;