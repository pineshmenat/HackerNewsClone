import React, {useState, useEffect, useContext} from 'react';
import queryString from 'query-string'
import {fetchPostsByUser} from '../util/api'
import {formatDate} from '../util/helpers'
import News from './News'
import ThemeContext from '../context/theme'

export default function User(props) {
    const [state, setState] = useState({
        created : null,
        id : null,
        karma : null,
        submitted : [],
        isLoading: true,
        error: null
      });

    useEffect(()=> {
        const {id} = queryString.parse(props.location.search);
        fetchPostsByUser(id)
        .then(({id, karma, submitted, created}) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    id,
                    karma,
                    submitted,
                    created: formatDate(created),
                    isLoading: false
                };
            })
        })
        .catch((error) => setState((prevState) => {return {...prevState, error, isLoading: false}}))
    }, [props.location.search])

    const {theme} = useContext(ThemeContext);

    const {id, karma, submitted, created, isLoading, error} = state;
        return(
            <div>
                {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                karma && 
                        <ul>
                            <li className="nav">
                                <h1 style={{marginBottom: "5px"}}>{id}</h1>
                                <p className={`subtitle-${theme}`}>{`joined`} <b>{created}</b> {`has`} <b>{karma}</b> {`karma`}</p>
                                <h1>Posts</h1>
                            </li>
                            {submitted.map((id) => (
                                <News newsID={id} key={id}/>
                            ))}
                        </ul>
            )}
            </div>
        )
}