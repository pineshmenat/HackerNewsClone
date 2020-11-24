import React, {useState, useEffect, useContext} from 'react';
import queryString from 'query-string'
import {fetchNewsById} from '../util/api'
import Subtitle from './Subtitle'
import Comment from './Comment'
import {formatDate} from '../util/helpers'
import useOnScrollBottom from '../custom-hooks/useOnScrollBottom';

export default function Post (props){
    const [state, setState] = useState({
        id: null,
        url: null,
        title: null,
        by: null,
        time: null,
        descendants: null,
        kids: [],
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const {id} = queryString.parse(props.location.search);
        fetchNewsById(id)
        .then(({id, url, title, by, time, kids, descendants}) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    id,
                    url,
                    title,
                    by,
                    time: formatDate(time),
                    descendants: descendants,
                    kids,
                    isLoading: false
                }
            })
        })
        .catch((error) => setState((prevState) => {
            return {...prevState, error, isLoading: false}
        }))
    },[]);

    const {id, url, title, by, time, kids, descendants, isLoading, error} = state;
    const {limitedIDs, hasMore} = useOnScrollBottom(error, isLoading, kids);

        return(
            isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                title && 
                <ul>
                    <li className="list-none my-5 mx-0">
                        <h1 className="text-3xl mb-1"><a className="no-underline font-bold dark:text-gray-300 text-red-700" target="_blank" href={url}>{title}</a></h1>
                        <Subtitle id={id} by={by} time={time} descendants={descendants}/>
                    </li>
                    {limitedIDs ? limitedIDs.map((id) => (
                        <Comment id={id} key={id}/>
                    )) : null}
                    {!hasMore && <div>You reached the end! That's all Comments I have for now! 🔚</div> }
                </ul>
            )
        )
}