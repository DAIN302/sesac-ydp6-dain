import React, {useState} from 'react'

export default function Prac2() {
    const [posts, setPosts] = useState([])
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')

    // 작성글 추가
    const addPost = (e) => {
        e.preventDefault()

        if(writer.trim() === ''||title.trim() === '') return;

        const newPosts = posts.concat({
            id : posts.length + 1,
            writer,
            title
        })

        setPosts(newPosts)
        setWriter('')
        setTitle('')
    }


  return (
    <div>
        <form>
            <label htmlFor='writer'>작성자 :</label>
            <input type='text' id='writer' placeholder='작성자' value={writer} onChange={(e)=>setWriter(e.target.value)}/>
            <label htmlFor='title'>제목 :</label>
            <input type='text' id='title' placeholder='제목' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={addPost}>작성</button>
        </form>
        <div>
            <select>
                <option value='writer'>작성자</option>
                <option value='title'>제목</option>
            </select>
            <input type='text' placeholder='검색어' />
            <button>검색</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.length > 0 &&
                        posts.map(post =>{
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>        
                                    <td>{post.title}</td>        
                                    <td>{post.writer}</td>        
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
