import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Subtitle({id, by, time, descendants}) {
    return(
        <p className="subtitle">
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
        </p>
    )
}

Subtitle.propTypes = {
    id: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    descendants: PropTypes.number
}