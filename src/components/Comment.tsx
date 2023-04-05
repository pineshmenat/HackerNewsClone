import React, { useState, useEffect } from 'react';
import {fetchCommentsById} from '../util/api'
import {Link} from 'react-router-dom'
import {formatDate} from '../util/helpers'

interface CommentState {
    by: string,
    id: number,
    text: string,
    time: string,
    isLoading: boolean,
    error: Error | null
}

export default function Comment({id}: {id: number }) {
    const [state, setState] = useState<CommentState>({
        by: "",
        id: 0,
        text: "",
        time: "",
        isLoading: true,
        error: null
    });

    useEffect(() => {
        fetchCommentsById(id)
        .then(({by, id, text, time}) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    by,
                    id,
                    text,
                    time: formatDate(time),
                    isLoading: false
                }
            })
        })
        .catch((error) => setState((prevState) => Object.assign(prevState, {error, isLoading: false})))
    }, [id]);

    const {by, text, time, isLoading, error} = state;
    return(
        <React.Fragment>
            {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                <li className="list-none rounded p-3 my-3 mx-0 bg-gray-400 bg-opacity-25">
                    <div className={`mt-1 text-gray-500 text`}>
                        {"by "}
                        <Link className="underline dark:text-gray-300 text-gray-900" to={{
                            pathname: "/user",
                            search: `?id=${by}`
                        }}>
                            {by}
                        </Link>
                        {` on ${time}`}
                    </div>
                    <p className="my-2" dangerouslySetInnerHTML={{__html: text}}></p>
                </li>
            )}
        </React.Fragment>
    )
}