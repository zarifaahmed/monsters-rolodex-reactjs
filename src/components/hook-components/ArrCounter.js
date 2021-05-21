import React,{useState} from 'react'

function ArrCounter() {
    const[items, setItems] = useState([])

    const addItem = () => {
        setItems([ ...items, {id: items.length, value: Math.floor(Math.random() * 100) + 1}])
    }
    return (
        <div>
            <button onClick={addItem} > 
                Add a number
            </button>
            <ul>
                {
                    items.map(item => <li key={item.id}> {item.value} </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ArrCounter
