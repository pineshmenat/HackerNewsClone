import {useState, useEffect} from 'react';
import queryString from 'query-string'
import {fetchPostsByUser} from '../util/api'
import {formatDate} from '../util/helpers'
import News from './News'
import useOnScrollBottom from '../custom-hooks/useOnScrollBottom';

interface UserProps {
    location: {
        search: string
    }
}

export default function User(props: UserProps) {
    const [state, setState] = useState({
        created : "",
        id : 0,
        karma : "",
        submitted : [0],
        isLoading: true,
        error: {
            message: ""
        }
      });

    useEffect(()=> {
        const {id} = queryString.parse(props.location.search);
        if(typeof id !== "string") return;
        fetchPostsByUser(id)
        .then(({id, karma, submitted, created}) => {
            setState((prevState) => ({
                ...prevState,
                id,
                karma,
                submitted,
                created: formatDate(created),
                isLoading: false
            }))
        })
        .catch((error) => setState((prevState) => ({...prevState, error, isLoading: false})))
    }, [props.location.search])

    const {id, karma, submitted, created, isLoading, error} = state;
    const {limitedIDs, hasMore} = useOnScrollBottom(error, isLoading, submitted);
        return(
            <div>
                {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                    karma && 
                        <ul>
                            <li className="list-none my-5 mx-0">
                                <h1 className="text-3xl font-bold dark:text-gray-300 text-red-700 mb-1">Posts by {id}</h1>
                                <p className={`mt-1 mb-10 text-gray-500 text`}>{`joined`} <b>{created}</b> {`has`} <b>{karma}</b> {`karma`}</p>
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