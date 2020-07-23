import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Subtitle({id, by, time, descendants, theme}) {
    return(
        <div className={`subtitle-${theme}`}>
            {"by "}
            <Link to={{
                pathname: "/user",
                search: `?id=${by}`
            }}>
                {by}
            </Link>
            {` on ${time} with `}
            <Link to={{
                pathname: "/post",
                search: `?id=${id}`
            }}>
                {`${descendants}`}
            </Link>{` comments`}
        </div>
    )
}

Subtitle.propTypes = {
    id: PropTypes.number.isRequired,
    by: PropTypes.string,
    time: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    descendants: PropTypes.number
}