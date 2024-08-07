import React, {useState, useRef} from 'react'
import PracTable from './PracTable'

export default function Prac2() {
    const [posts, setPosts] = useState([])
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('writer')

    const inputWriterRef = useRef()
    const inputTitleRef = useRef()
    const inputSearchRef = useRef()

    // 작성글 추가
    const addPost = (e) => {
        e.preventDefault()

        // if(writer.trim() === ''||title.trim() === '') return;
        if(writer.trim() === '') {
            inputWriterRef.current.focus()
            return;
        }

        if(title.trim() === '') {
            inputTitleRef.current.focus()
            return;
        }

        const newPosts = posts.concat({
            id : posts.length + 1,
            writer,
            title
        })

        setPosts(newPosts)
        setWriter('')
        setTitle('')

        inputWriterRef.current.focus()
    }

    // 검색 기능
    const showSearchList = () => {
        if(search.trim() === '') {
            inputSearchRef.current.focus()
            return;
        }
        const result = posts.filter(post => post[select].includes(search))
        setSearchResult(result)  
        inputSearchRef.current.focus()      
    }

    const showCompleteList = () => {
        setSearchResult(posts)
    }


  return (
    <div>
        <form style={{margin : '20px'}}>
            <label htmlFor='writer'>작성자 :</label>
            <input type='text' id='writer' placeholder='작성자' value={writer} 
            onChange={(e)=>setWriter(e.target.value)} ref={inputWriterRef}/>
            <label htmlFor='title'>제목 :</label>
            <input type='text' id='title' placeholder='제목' value={title} 
            onChange={(e)=>setTitle(e.target.value)} ref={inputTitleRef}/>
            <button onClick={addPost}>작성</button>
        </form>
        <div style={{margin : '20px'}}>
            <select onChange={(e)=>setSelect(e.target.value)}>
                <option value='writer'>작성자</option>
                <option value='title'>제목</option>
            </select>
            <input type='text' placeholder='검색어'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             onKeyDown={(e)=>{if(e.code==='Enter') showSearchList()}}
             ref={inputSearchRef}
             />
            <button onClick={showSearchList}>검색</button>
            <button onClick={showCompleteList}>전체</button>
        </div>
        <div style={{margin : '20px'}}>
            <PracTable posts={posts}/>
            <hr />
            {searchResult.length > 0 ? <PracTable posts={searchResult}/> : <div>검색결과가 없습니다</div>}
        </div>
    </div>
  )
}
