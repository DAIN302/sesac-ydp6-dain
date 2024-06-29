console.log('연결');

const linkBtn = document.querySelectorAll('nav li a')
const mainSection = document.querySelector('main')

linkBtn[2].addEventListener('click', getPlayers)

// 전체 쿠키 조회
async function getPlayers(e) {
    e.preventDefault();
    let data = {};
    try {
        const playersAxios = await axios({
            method : 'GET',
            url : '/players',
            data 
        })
        const PlayersData = playersAxios.data
        let hcode = `
            <h2>전체 쿠키 목록</h2>
            <section id="players">
                <ul>
        `
        PlayersData.forEach((ele) => {
            hcode += `
                <li onclick="getPlayer(${ele.player_id})">
                    <figure class="${ele.Team.name} cookie">
                        <img src="/static/img/team/${ele.team_id}.png" alt="${ele.Team.name}" class="team"/>
                        <img src="/static/img/cookie/${ele.name}.png" alt="${ele.name}" class="cookie-img"/>
                        <figcaption>${ele.name}</figcaption>
                    </figure>
                </li>
            ` 
        });

        hcode += `
            </ul>        
        </section>
        `
        mainSection.innerHTML = hcode
    }catch(err){
        console.error(err);
    }
}

// id로 특정 선수 조회
async function getPlayer(id) {
    let data = {};
    try {
        const playerAxios = await axios({
            method : "GET",
            url : `/players/${id}`,
            data
        })
        const playerData = playerAxios.data
        let hcode = `
        <h2>쿠키 정보</h2>
        <section id="player">
            <a href="/">홈으로 가기</a>
            <div class="player-card">
                <figure>
                    <img class="player-img" src="/static/img/profile/${playerData.name}.png" alt="${playerData.name}">
                </figure>
                <article>
                    <img class="player-team-img" src="/static/img/team/${playerData.team_id}.png" alt="팀">
                    <div class="player-name">${playerData.name}</div>
                    <div class="player-info">
                        <div class="player-type">
                            <img class="player-type-img" src="/static/img/type/${playerData.Profile.type}.png" alt="${playerData.Profile.type}">
                            ${playerData.Profile.type}
                        </div>
                        <div class="player-position">
                            <img class="player-position-img" src="/static/img/position/${playerData.Profile.position}.png" alt="${playerData.Profile.position}">
                            ${playerData.Profile.position}
                        </div>
                    </div>
                </article>
            </div>
        </section>    
        `
        mainSection.innerHTML = hcode

        const playerCard = document.querySelector(".player-card");
        playerCard.style.backgroundImage = 
        `linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.17), 
        rgba(255, 255, 255, 0.17), #fff), url("/static/img/bg/${playerData.name}.png")`;
    }catch(err){
        console.error(err);
    }

}
