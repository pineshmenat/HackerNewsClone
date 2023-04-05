import React, {useState, useEffect} from 'react'
import {fetchNewsById} from '../util/api'
import Subtitle from './Subtitle'
import {formatDate} from '../util/helpers'

interface NewsProps {
    newsID: number
}

interface NewsState {
    id: number,
    url: string,
    title: string,
    by: string,
    time: string,
    descendants: number,
    type: string,
    isLoading: boolean,
    error: Error | null
}

export default function News(props: NewsProps) {

    const [state, setState] = useState<NewsState>({
        id: 0,
        url: "",
        title: "",
        by: "",
        time: "",
        descendants: 0,
        type: "",
        isLoading: true,
        error: null
    });

    useEffect(() => {
        fetchNewsById(props.newsID)
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
            (type === "story" || type === "job") &&
            <React.Fragment>
                {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                    <li className="list-none my-5 mx-0">
                        <a className="no-underline font-bold dark:text-gray-300 text-red-700" target="_blank" href={url} rel="noreferrer">{title}</a>
                        <Subtitle id={id} by={by} time={time} descendants={descendants}/>
                    </li>
                )}
            </React.Fragment>
        ) as JSX.Element;
}