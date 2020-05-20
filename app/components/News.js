import React from 'react'
import {fetchNewsById} from '../util/api'

export default class News extends React.Component {

    state = {
        id: null,
        url: null,
        title: null,
        by: null,
        time: null,
        descendants: null,
        isLoading: true,
        error: null
    }

    componentDidMount() {
        const {newsID} = this.props;
        fetchNewsById({newsID})
        .then(({id, url, title, by, time, descendants}) => {
            this.setState({
                id,
                url,
                title,
                by,
                time: new Date(time).toLocaleString(),
                descendants: descendants,
                isLoading: false
            })
        })
        .catch((error) => this.setState({error, isLoading: false}))
    }
    
    render() {
        const {id, url, title, by, time, descendants, isLoading, error} = this.state;
        return(
            <React.Fragment>
                {isLoading ? <p>Loading...</p> : error ? <p>{Error.message}</p> : (
                    <li className="nav-li">
                    {title && 
                        <div className="news">
                            <p className="title"><a href={url}>{title}</a></p>
                            <p className="subtitle">{`by ${by} on ${time} with ${descendants} comments`}</p>
                        </div>}
                    </li>
                )}
            </React.Fragment>
        )
    }
}