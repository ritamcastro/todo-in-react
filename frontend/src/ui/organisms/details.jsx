import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()

    const [item, _setItem] = useState(() => {
        const savedItems = JSON.parse(localStorage.getItem('todoItems'))
        return savedItems.find(item => item.id == id)
    })

    return (
        <>
            <h1>Detailed ToDo</h1>
            <h2>Title: {item.text}</h2>
        </>
    )
}

export default Details
