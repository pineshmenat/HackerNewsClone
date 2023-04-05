import React, {useState, useEffect} from 'react';
import queryString from 'query-string'
import {fetchNewsById} from '../util/api'
import Subtitle from './Subtitle'
import Comment from './Comment'
import {formatDate} from '../util/helpers'
import useOnScrollBottom from '../custom-hooks/useOnScrollBottom';

interface PostProps {
    location: {
        search: string
    }
}

interface PostState {
  id: number,
  url: string,
  title: string,
  by: string,
  time: string,
  descendants: number,
  kids: number[],
  isLoading: boolean,
  error: Error | null
}

export default function Post(props: PostProps){
    const [state, setState] = useState<PostState>({
        id: 0,
        url: "",
        title: "",
        by: "",
        time: "",
        descendants: 0,
        kids: [0],
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const {id} = queryString.parse(props.location.search);
        fetchNewsById(Number(id))
        .then(({id, url, title, by, time, kids, descendants}) => {
            setState((prevState) => ({
                ...prevState,
                id,
                url,
                title,
                by,
                time: formatDate(time),
                descendants: descendants,
                kids,
                isLoading: false
            }))
        })
        .catch((error: Error) => setState((prevState) => {
            return {...prevState, error, isLoading: false}
        }))
    },[props.location.search]);

    const {id, url, title, by, time, kids, descendants, isLoading, error} = state;
    const {limitedIDs, hasMore} = useOnScrollBottom(error, isLoading, kids);
        return (
          <>
            {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
            title &&
            <ul>
              <li className="list-none my-5 mx-0">
                <h1 className="text-3xl mb-1">
                  <a
                    className="no-underline font-bold dark:text-gray-300 text-red-700"
                    target="_blank"
                    href={url}
                    rel="noreferrer"
                  >
                    {title}
                  </a>
                </h1>
                <Subtitle
                  id={id}
                  by={by}
                  time={time}
                  descendants={descendants}
                />
              </li>
              {limitedIDs
                ? limitedIDs.map((id) => <Comment id={id} key={id} />)
                : null}
              {!hasMore && (
                <div>
                  You reached the end! That's all Comments I have for now! 🔚
                </div>
              )}
            </ul>
            )}
          </>
        );
}