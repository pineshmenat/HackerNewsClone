import React, {useState, useEffect, useContext} from 'react';
import queryString from 'query-string'
import {fetchNewsById} from '../util/api'
import Subtitle from './Subtitle'
import Comment from './Comment'
import {formatDate} from '../util/helpers'
import ThemeContext from '../context/theme'
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

    const {theme} = useContext(ThemeContext);

    const {id, url, title, by, time, kids, descendants, isLoading, error} = state;
        return(
            isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                title && 
                <ul>
                    <li className="nav">
                        <h1 style={{marginBottom: "5px"}}><a className="link" target="_blank" href={url}>{title}</a></h1>
                        <Subtitle theme={theme} id={id} by={by} time={time} descendants={descendants}/>
                    </li>
                    <p></p>
                    {kids.map((id) => (
                        <Comment id={id} key={id}/>
                    ))}
                </ul>
            )
        )
}