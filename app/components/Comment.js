import React from 'react';
import {fetchCommentsById} from '../util/api'
import {Link} from 'react-router-dom'
import {formatDate} from '../util/helpers'

export default class Comment extends React.Component {
    state = {
        by: null,
        id: null,
        text: null,
        time: null,
        isLoading: true,
        error: null
    }

    componentDidMount() {
        const {id} = this.props;
        console.log("id: ", id);
        fetchCommentsById(id)
        .then(({by, id, text, time}) => {
            this.setState({
                by,
                id,
                text,
                time: formatDate(time),
                isLoading: false
            })
        })
        .catch((error) => this.setState({error, isLoading: false}))

    }

    render() {
        const {by, id, text, time, isLoading, error} = this.state;
        return(
            <React.Fragment>
            {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                <li className="nav-li">
                    {text && 
                        <div className="comment">
                            <p className="subtitle">
                                {"by "}
                                <Link to={{
                                    pathname: "/user",
                                    search: `?id=${by}`
                                }}>
                                    {by}
                                </Link>
                                {` on ${time}`}
                            </p>
                            <div dangerouslySetInnerHTML={{__html: text}}/>
                        </div>
                    }
                </li>
            )}
        </React.Fragment>
        )
    }
}