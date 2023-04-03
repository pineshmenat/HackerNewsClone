import { useState, useEffect } from 'react';
import {fetchNewsIDsByType} from '../util/api'

export default function useFetchNewsIDs(type: string) {
    const [newsIDs, setNewsIDs] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        fetchNewsIDsByType(type)
        .then((newsIDs) => {
            setNewsIDs(newsIDs);
            setIsLoading(false);
        })
        .catch((error: {}) => {
            setError(error);
            setIsLoading(false);
        })
    }, [type]);
    return {newsIDs, isLoading, error};
}