import React from 'react'
import {Link} from 'react-router-dom'

export default function Subtitle({id, by, time, descendants}: SubtitleProps) {
    return(
        <div className={`mt-1 text-gray-500 text`}>
            {"by "}
            <Link className={`underline dark:text-gray-300 text-gray-900`} to={{
                pathname: "/user",
                search: `?id=${by}`
            }}>
                {by}
            </Link>
            {` on ${time} with `}
            <Link className={`underline dark:text-gray-300 text-gray-900`} to={{
                pathname: "/post",
                search: `?id=${id}`
            }}>
                {`${descendants ? descendants: 0}`}
            </Link>{` comments`}
        </div>
    )
}

interface SubtitleProps {
    id: number,
    by: string,
    time: string,
    descendants: number
}