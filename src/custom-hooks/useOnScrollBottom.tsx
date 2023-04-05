import { useState, useEffect } from 'react';
import {debounce} from "lodash";
import {getDocHeight} from '../util/helpers';

export default function useOnScrollBottom(error: Error | null, isLoading: boolean, allIDs: number[]) {
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