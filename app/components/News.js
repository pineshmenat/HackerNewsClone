import React from 'react'
import {fetchNewsById} from '../util/api'
import {Link} from 'react-router-dom'
import Subtitle from './Subtitle'
import {formatDate} from '../util/helpers'
import {ThemeConsumer} from '../context/theme'

export default class News extends React.Component {

    state = {
        id: null,
        url: null,
        title: null,
        by: null,
        time: null,
        descendants: null,
        type: null,
        isLoading: true,
        error: null
    }

    componentDidMount() {
        const {newsID} = this.props;
        fetchNewsById(newsID)
        .then(({id, url, title, by, time, descendants, type}) => {
            this.setState({
                id,
                url,
                title,
                by,
                time: formatDate(time),
                descendants: descendants,
                type: type,
                isLoading: false
            })
        })
        .catch((error) => this.setState({error, isLoading: false}))
    }
    
    render() {
        const {id, url, title, by, time, descendants, type, isLoading, error} = this.state;
        return(
            (type === "story") && <ThemeConsumer>
                {({theme}) => (
                    <React.Fragment>
                        {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                            <li className="news">
                                <a className="link" target="_blank" href={url}>{title}</a>
                                <Subtitle id={id} by={by} time={time} descendants={descendants} theme={theme}/>
                            </li>
                        )}
                    </React.Fragment>
                )}
            </ThemeConsumer>
        )
    }
}