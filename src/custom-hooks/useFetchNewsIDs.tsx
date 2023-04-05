import { useState, useEffect } from 'react';
import {fetchNewsIDsByType} from '../util/api'

export default function useFetchNewsIDs(type: string) {
    const [newsIDs, setNewsIDs] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetchNewsIDsByType(type)
        .then((newsIDs) => {
            setNewsIDs(newsIDs);
            setIsLoading(false);
        })
        .catch((error: Error) => {
            if(error instanceof Error)setError(error);
            setIsLoading(false);
        })
    }, [type]);
    return {newsIDs, isLoading, error};
}