import React from 'react';
import {useState} from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {useAddSuperHeroData, useSuperHeroesData} from "../hooks/useSuperHeroesData";
import {Link} from "react-router-dom";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const onSuccess = () => {
        console.log('Perform AFTER data function')
    }

    const onError = () => {
        console.log('Perform if ERROR while data fetching')
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    const { mutate: addHero } = useAddSuperHeroData()

    const handleAddHeroClick = () => {
        const hero = { name, alterEgo }
        addHero(hero)
    }

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>RQ Super Heroes page</h2>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
            <button onClick={refetch}>Fetch heroes</button>
            {
                data?.data.map(hero => {
                    return (
                        <div key={hero.id}>
                            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                        </div>
                    )
                })
                // data.map((heroName) => {
                //     return <div key={heroName}>{heroName}</div>
                // })
            }
        </div>
    );
};