import React, { useState, useEffect, useContext } from 'react';
import {fetchCommentsById} from '../util/api'
import {Link} from 'react-router-dom'
import {formatDate} from '../util/helpers'
import ThemeContext from '../context/theme';

export default function Comment(props) {
    const [state, setState] = useState({
        by: null,
        id: null,
        text: null,
        time: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const {id} = props;
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
    }, [props.id]);

    const {theme} = useContext(ThemeContext);

    const {by, id, text, time, isLoading, error} = state;
    return(
        <React.Fragment>
            {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                <li className="list-none rounded p-3 my-3 mx-0 bg-gray-500 bg-opacity-25">
                    <div className={`subtitle-${theme} mt-1 text-gray-600 text`}>
                        {"by "}
                        <Link className="underline" to={{
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