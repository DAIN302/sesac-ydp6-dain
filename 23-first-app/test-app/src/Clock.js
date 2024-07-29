function Clock(){
    return (
        <div>
            <h1>현재 시간은 {new Date().toLocaleTimeString()} 입니다.</h1>
            {/* toLocaleTimeString : 사용자의 문화권에 맞는 시간 표기법으로 시간 리턴 */}
        </div>
    )
}

export default Clock;