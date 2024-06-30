const linkBtn = document.querySelectorAll('nav li a')
const mainSection = document.querySelector('main')

linkBtn[0].addEventListener('click', getTeams)
linkBtn[1].addEventListener('click', getPlayers)

const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// 전체 쿠키 조회
async function getPlayers(e) {
    e.preventDefault()
    let data = {};
    try {
        const playersAxios = await axios({
            method : 'GET',
            url : '/players',
            data 
        })
        const PlayersData = playersAxios.data
        console.log(PlayersData);
        let hcode = `
            <h2>쿠키 목록</h2>
            <section id="players">
                <ul>
        `
        PlayersData.forEach((ele) => {
            hcode += `
                <li id="list_${ele.player_id}">
                    <figure class="${ele.Team.name} cookie">
                        <img src="/static/img/team/${ele.team_id}.png" alt="${ele.Team.name}" class="team"/>
                        <button class="del-btn" onclick="deletePlayer(this, ${ele.player_id})">
                            <span class="fa-solid fa-trash-can"></span>
                        </button>
                        <img src="/static/img/cookie/${ele.name}.png" alt="${ele.name}" class="cookie-img"/>
                        <figcaption onclick="getPlayer(${ele.player_id})">${ele.name}</figcaption>
                    </figure>
                </li>
            ` 
        });

        hcode += `
            </ul>        
        </section>
        <form id="addCookie" name="addCookie">
            <fieldset>
            <legend>쿠키 정보 추가</legend>
            <label for="name">이름</label>
            <input type="text" id="name" name="name"/>
            <label for="age">나이</label>
            <input type="number" id="age" name="age"/>
            <span>등급</span>
            <select name="team_id">
                <option value="1">Ancient</option>
                <option value="2">Dragon</option>
                <option value="3">Legendary</option>
                <option value="4">Beast</option>
            </select>
            <button type="button" onclick="postPlayer()">추가하기</button>
            </fieldset>
        </form>
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
            <form id="chgTeam" name="chgTeam">
            <fieldset>
            <legend>쿠키 등급 변경</legend>
            <span>등급</span>
            <select name="team_id">
                <option value="1">Ancient</option>
                <option value="2">Dragon</option>
                <option value="3">Legendary</option>
                <option value="4">Beast</option>
            </select>
            <button type="button" onclick="patchPlayer(${id})">변경하기</button>
            </fieldset>
        </form>
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
// 쿠키 추가
async function postPlayer() {
    console.log('add');
    const form = document.forms['addCookie']
    try {
        const data = {
            name : form.name.value,
            age : form.age.value,
            team_id : form.team_id.value
        };
        const addAxios = await axios({
            method : 'POST',
            url : '/players',
            data
        })

        console.log(addAxios);
        const addData = addAxios.data
        let teamName;
        
        switch(addData.team_id){
            case "1": teamName = "ancient"; 
            break;
            case "2": teamName = "dragon"; 
            break;
            case "3": teamName = "legendary"; 
            break;
            case "4": teamName = "beast"; 
            break;
        }

        console.log(addData.team_id);
        const hcode = `
                <li id="list_${addData.player_id}">
                    <figure class="${teamName} cookie">
                        <img src="/static/img/team/${addData.team_id}.png" alt="${teamName}" class="team"/>
                        <button class="del-btn" onclick="deletePlayer(this, ${addData.player_id})">
                            <span class="fa-solid fa-trash-can"></span>
                        </button>
                        <img src="/static/img/cookie/${addData.name}.png" alt="${addData.name}" class="cookie-img"/>
                        <figcaption  onclick="getPlayer(${addData.player_id})">${addData.name}</figcaption>
                    </figure>
                </li>
        `
        const cookieList = document.querySelector('#players > ul')
        cookieList.insertAdjacentHTML('beforeend', hcode)

    } catch(err){
        console.error(err);
    }

}

// 정보 변경
async function patchPlayer(id) {
    const form = document.forms['chgTeam']
    console.log(form.team_id.value);
    try {
        const patchAxios = await axios({
            method : 'PATCH',
            url : `/players/${id}/team`,
            data : { team_id : form.team_id.value }
        })
        console.log(patchAxios);
        const cookieImg = document.querySelector(".player-team-img")
        cookieImg.setAttribute('src', `/static/img/team/${form.team_id.value}.png`)
    }catch(err){
        console.error(err);
        
    }
}

// 삭제
async function deletePlayer(obj, id) {
    console.log('삭제', id);
    if(!confirm('삭제하시겠습니까?')) {
        return;
    }
    try {
        const deleteAxios = await axios({
            method : 'DELETE',
            url : `/players/${id}`,
            data : { id }
        })
        if(deleteAxios.data){
            obj.closest(`#list_${id}`).remove()
        }

    }catch(err){
        console.error(err);
    }
}


// 전체 팀 조회
async function getTeams(e) {
    e.preventDefault();
    let data = {};
    try {
        const teamsAxios = await axios({
            method : 'GET',
            url : '/teams',
            data 
        })
        const teamsData = teamsAxios.data
        let hcode = `
            <section id="teams">
                <h2>쿠키 등급 목록
                    <button class="sort" onclick="getTeamsSort()">
                        <span class="fa-solid fa-sort"></span>
                    </button>
                </h2>
                <form name="search-form" id="search-form">
                    <input type="text" placeholder="등급 이름 검색" name="search"/>
                    <button type="button" onclick="getTeamSearch()">
                        <span class="fa-solid fa-magnifying-glass"></span>
                    </button>
                </form>
                <articel class="teams-box">
                    <ul class="teams-list">
        `
        
        teamsData.forEach((ele,idx) => {
            const teamMember = ele.Players
            hcode += `
                 <li class="${ele.name} team">
                    <h3 class=${ele.name} onclick="getTeam(${ele.team_id})">${ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}</h3>
                    <ul class="cookie-icon">
            ` 

            teamMember.forEach(ele=>{
                hcode += `
                    <li onclick="getPlayer(${ele.player_id})">
                        <img src="/static/img/icon/${ele.name}.png" alt="${ele.name}" title="${ele.name}"/>
                    </li>
                `
            })

            hcode += `
            </ul>
            </li>`
        });

        hcode += `
            </ul> 
            </article>       
        </section>
        `
        mainSection.innerHTML = hcode
    }catch(err){
        console.error(err);
    }
}

// 오름차순 정렬
async function getTeamsSort(){
    let data;
    try {
    const sortAxios = await axios({
        method : 'GET',
        url : '/teams?sort=name_asc',
        data
    })
    const sortData = sortAxios.data
    let hcode = `
        <ul class="teams-list">
    `
    console.log(sortData);
    sortData.forEach((ele,idx) => {
        console.log(ele);
        const teamMember = ele.Players
        hcode += `
             <li class="${ele.name} team">
                <h3 class=${ele.name} onclick="getTeam(${ele.team_id})">${ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}</h3>
                <ul class="cookie-icon">
        ` 

        teamMember.forEach(ele=>{
            hcode += `
                <li onclick="getPlayer(${ele.player_id})">
                    <img src="/static/img/icon/${ele.name}.png" alt="${ele.name}" title="${ele.name}"/>
                </li>
            `
        })

        hcode += `
            </ul>
        </li>`
    });
    hcode += `
        </ul>        
    `
    const teamBox = document.querySelector(".teams-box")

    teamBox.innerHTML = hcode
    } catch(err){
        console.error(err);
    }
}

// 특정 팀 조회
async function getTeamSearch(){
    const form = document.forms['search-form']
    const search = form.search.value
    try{
        const searchAxios = await axios({
            method : 'GET',
            url : `/teams?search=${search}`,
            data : {search}
        })
        console.log(searchAxios.data);
        let hcode = '<ul class="teams-list">';
        const seachData = searchAxios.data
        seachData.forEach(ele=>{
            const teamMember = ele.Players
            hcode += `
                 <li class="${ele.name} team">
                    <h3 class=${ele.name} onclick="getTeam(${ele.team_id})">${ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}</h3>
                    <ul class="cookie-icon">
            ` 
    
            teamMember.forEach(ele=>{
                hcode += `
                    <li onclick="getPlayer(${ele.player_id})">
                        <img src="/static/img/icon/${ele.name}.png" alt="${ele.name}" title="${ele.name}"/>
                    </li>
                `
            })
    
            hcode += `
                </ul>
            </li>`
        })
        hcode += `
        </ul>        
        `
        const teamBox = document.querySelector(".teams-box")

        teamBox.innerHTML = hcode
    }catch(err){
        console.error(err);
    }
}

async function getTeam(id) {
    console.log(id);
    let data = {};
    try {
        const teamAxios = await axios({
            method : 'GET',
            url : `/teams/${id}`,
            data
        })
        const teamData = teamAxios.data
        const teamPlayers = teamData.Players
        console.log(teamPlayers);
        
        let hcode = `<ul class="teams-list">
            <li class="${teamData.name} team">
                <h3 class=${teamData.name}>${teamData.name.charAt(0).toUpperCase() + teamData.name.slice(1)}</h3>
                <ul class="team-cookie">
        `;

        teamPlayers.forEach(ele=>{
            hcode += `
                <li id="list_${ele.player_id}">
                    <figure class="${teamData.name} cookie">
                        <img src="/static/img/team/${id}.png" alt="${teamData.name}" class="team"/>
                        <button class="del-btn" onclick="deletePlayer(this, ${ele.player_id})">
                            <span class="fa-solid fa-trash-can"></span>
                        </button>
                        <img src="/static/img/cookie/${ele.name}.png" alt="${ele.name}" class="cookie-img"/>
                        <figcaption onclick="getPlayer(${ele.player_id})">${ele.name}</figcaption>
                    </figure>
                </li>
            ` 
        })

        hcode += `</ul></li>`
        
        const teamBox = document.querySelector(".teams-box")
        teamBox.innerHTML = hcode

    } catch(err){
        console.error(err);
    }
}