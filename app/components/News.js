import React, {useState, useEffect} from 'react'
import {fetchNewsById} from '../util/api'
import Subtitle from './Subtitle'
import {formatDate} from '../util/helpers'
import {ThemeConsumer} from '../context/theme'

export default function News(props) {

    const [state, setState] = useState({
        id: null,
        url: null,
        title: null,
        by: null,
        time: null,
        descendants: null,
        type: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const {newsID} = props;
        fetchNewsById(newsID)
        .then(({id, url, title, by, time, descendants, type}) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    id,
                    url,
                    title,
                    by,
                    time: formatDate(time),
                    descendants: descendants,
                    type: type,
                    isLoading: false
                }
            });
        })
        .catch((error) => setState((prevState) => {
            return {
                ...prevState,
                error, 
                isLoading: false
            }
        }))
    }, [props.newsID]);
    
    const {id, url, title, by, time, descendants, type, isLoading, error} = state;
        return(
            (type === "story") && <ThemeConsumer>
                {({theme}) => (
                    <React.Fragment>
                        {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                            <li className="news">
                                <a className="link" target="_blank" href={url}>{title}</a>
                                <Subtitle id={id} by={by} time={time} descendants={descendants} theme={theme}/>
                            </li>
                        )}
                    </React.Fragment>
                )}
            </ThemeConsumer>
        )
}