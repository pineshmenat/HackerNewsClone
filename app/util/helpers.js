import React, {useState, useEffect} from 'react';
import debounce from "lodash.debounce";

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

export function formatDate(time) {
    return new Date(time * 1000).toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric"
    })
}

export function getDocHeight() {;
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
};