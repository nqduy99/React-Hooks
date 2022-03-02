import {useEffect, useState} from 'react'

const tabs =['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('Hi')
    const [posts, setPosts] = useState([])
    const [type, setType] =useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
  //const useEffect(callback, [deps])
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200){
                setShowGoToTop(true)
            }else{
                setShowGoToTop(false)
            }
        } 

        window.addEventListener('scroll', handleScroll)

        //Cleanup Function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []) 

    return (
        <div>
            {tabs.map((tab) => {
                return <button 
                    onClick={() => setType(tab)}
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {
                        color: '#333'
                    }}
                >{tab}</button>
            })}
            <input 
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <ul>
            {posts.map((post) => {
            return <li key={post.id}>{post.title || post.name}</li>
            })}
        </ul>

        {showGoToTop &&
            <button
                style={{
                    position: 'fixed',
                    right: 20, 
                    bottom: 20
                }}
            >Go to Top</button>
        
        }

        </div>
    )
        
}

export default Content;