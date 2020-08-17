import React, {useState, useEffect, useContext} from 'react';
import queryString from 'query-string'
import {fetchPostsByUser} from '../util/api'
import {formatDate} from '../util/helpers'
import News from './News'
import ThemeContext from '../context/theme'
import useOnScrollBottom from '../custom-hooks/useOnScrollBottom';

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
        .catch((error) => setState((prevState) => ({...prevState, error, isLoading: false})))
    }, [props.location.search])

    const {theme} = useContext(ThemeContext);

    const {id, karma, submitted, created, isLoading, error} = state;
    const {limitedIDs, hasMore} = useOnScrollBottom(error, isLoading, submitted);
        return(
            <div>
                {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                karma && 
                        <ul>
                            <li>
                                <h1 className="text-3xl font-bold mb-1">Posts by {id}</h1>
                                <p className={`subtitle-${theme} mt-1 mb-10 text-gray-600 text`}>{`joined`} <b>{created}</b> {`has`} <b>{karma}</b> {`karma`}</p>
                            </li>
                            {limitedIDs.map((id) => (
                                <News newsID={id} key={id}/>
                            ))}
                            {!hasMore && <div>You did it! You reached the end! That's all Posts I have for now! 🔚</div> }
                        </ul>
            )}
            </div>
        )
}