import React, { useState, useEffect } from 'react';
import {fetchNewsIDsByType} from '../util/api.js'

export default function useFetchNewsIDs(type) {
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