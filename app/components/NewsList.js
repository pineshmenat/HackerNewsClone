import React, {useState, useEffect} from 'react'
import News from './News'
import {fetchNewsIDsByType} from '../util/api.js'

export default function NewsList(props){
    const [newsIDs, setNewsIDs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const {type} = props;
        console.log(type);
        fetchNewsIDsByType(type)
        .then((newsIDs) => {
            setNewsIDs(newsIDs);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    }, [props.type])

    return (
        <ul>
           {isLoading === true ? <p>Loading...</p> : (error !== null ? <p>Error!</p> :
               newsIDs.map((id) => {
                   return <News newsID={id} key={id}/>
               })  
           )}
        </ul>
   );
}