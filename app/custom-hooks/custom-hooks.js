import React, { useState, useEffect } from 'react';
import {fetchNewsIDsByType} from '../util/api.js'
import debounce from "lodash.debounce";
import {getDocHeight} from '../util/helpers';

export function useFetchNewsIDs(type) {
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

export function useOnScrollBottom(error, isLoading, allIDs) {
    const [limitedIDs, setLimitedNewsIDs] = useState(allIDs.slice(0, 20));
    const [hasMore, setHasMore] = useState(true);

    useEffect(()=> {
        setLimitedNewsIDs(allIDs.slice(0, 20));
    }, [allIDs]);

    window.onscroll = debounce(() => {
        if (error || isLoading || !hasMore) return;
        // Checks that the page has scrolled to the bottom
        if ( Math.round(window.innerHeight + document.documentElement.scrollTop + 2) >= getDocHeight() ) {
            setLimitedNewsIDs((prevIDs) => prevIDs.concat(allIDs.slice(prevIDs.length, prevIDs.length+20)))
            if(allIDs.length === limitedIDs.length) {
                setHasMore(false);
                console.log("At the dead end");
            }
        }
    }, 100);

    return {limitedIDs, hasMore};
}