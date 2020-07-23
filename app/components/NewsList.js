import React, {useState, useEffect} from 'react'
import News from './News'
import {fetchNewsIDsByType} from '../util/api.js'
import {useOnScrollBottom} from '../util/helpers';

function useFetchNewsIDs(type) {
    const [newsIDs, setNewsIDs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNewsIDsByType(type)
        .then((newsIDs) => {
            setNewsIDs(newsIDs);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    }, [type]);
    return {newsIDs, isLoading, error};
}

export default function NewsList(props){
    const {newsIDs, isLoading, error} = useFetchNewsIDs(props.type);
    const {limitedIDs, hasMore} = useOnScrollBottom(error, isLoading, newsIDs);
    return (
        <ul>
           {isLoading === true ? <p>Loading...</p> : (error !== null ? <p>Error!</p> :
               limitedIDs.map((id) => {
                   return <News newsID={id} key={id}/>
               })
           )}
           {!hasMore && <div>You did it! You reached the end! That's all Posts I have for now! 🔚</div> }
        </ul>
   );
}