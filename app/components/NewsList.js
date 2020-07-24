import React from 'react'
import News from './News'
import {useFetchNewsIDs, useOnScrollBottom} from '../custom-hooks/custom-hooks';

export default function NewsList(props){
    const {newsIDs, isLoading, error} = useFetchNewsIDs(props.type);
    const {limitedIDs, hasMore} = useOnScrollBottom(error, isLoading, newsIDs);
    return (
        <ul>
           {isLoading === true ? <p>Loading...</p> : (error !== null ? <p>Error!</p> :
               limitedIDs.map((id) => <News newsID={id} key={id}/>)
           )}
           {!hasMore && <div>You did it! You reached the end! That's all Posts I have for now! 🔚</div> }
        </ul>
   );
}