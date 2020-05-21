import React from 'react'
import {fetchNewsById} from '../util/api'
import {Link} from 'react-router-dom'
import Subtitle from './Subtitle'
import {formatDate} from '../util/helpers'

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
        fetchNewsById(newsID)
        .then(({id, url, title, by, time, descendants}) => {
            this.setState({
                id,
                url,
                title,
                by,
                time: formatDate(time),
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
                {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                    <li className="nav-li">
                    {title && 
                        <div className="news">
                            <p className="title"><a href={url}>{title}</a></p>
                            <Subtitle id={id} by={by} time={time} descendants={descendants}/>
                        </div>}
                    </li>
                )}
            </React.Fragment>
        )
    }
}