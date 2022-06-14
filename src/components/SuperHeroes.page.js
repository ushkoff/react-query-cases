import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then(response => {
            setData(response.data)
            setIsLoading(false)
        }).catch(e => {
            setError(e.message)
            setIsLoading(false)
            throw e
        })
    }, [])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h1>Super Heroes (useState, useEffect)</h1>
            {data.map((el, index) => {
                return <div key={index}>{JSON.stringify(el)}</div>
            })}
        </div>
    )
}