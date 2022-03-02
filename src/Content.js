import {useEffect, useLayoutEffect, useState} from 'react'

const lessons = [
    {
        id: 1,
        name: 'React la gi? Tai sao nen hoc ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/ MPA la gi'
    },
    {
        id: 3,
        name: 'Arrow'
    }
]

function Content() {
    const [count , setCount] = useState(1)

    useEffect(()=>{
        if(count > 3)
            setCount(0)

    }, [count])
    
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Run</button>
        </div>
    )     
}


export default Content;