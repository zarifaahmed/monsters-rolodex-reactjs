import React,{useState,useEffect} from 'react'

function UseEffComponent1() {
     const [count, setCount] =useState(0)
     const [name, setName] = useState('')
     useEffect(() => { 
         document.title = `Clicked ${count} times`
         console.log('updated')
        },[count])
    return (
        <div>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={() => setCount(count+1)} >Count{count}</button>
        </div>
    )
}

export default UseEffComponent1
