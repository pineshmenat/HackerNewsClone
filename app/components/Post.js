import React from 'react';
import queryString from 'query-string'
import {fetchNewsById} from '../util/api'
import Subtitle from './Subtitle'
import Comment from './Comment'
import {formatDate} from '../util/helpers'
import {ThemeConsumer} from '../context/theme'
export default class Post extends React.Component {
    state = {
        id: null,
        url: null,
        title: null,
        by: null,
        time: null,
        descendants: null,
        kids: [],
        isLoading: true,
        error: null
    }

    componentDidMount() {
        const {id} = queryString.parse(this.props.location.search);
        console.log("id: ", id);
        fetchNewsById(id)
        .then(({id, url, title, by, time, kids, descendants}) => {
            this.setState({
                id,
                url,
                title,
                by,
                time: formatDate(time),
                descendants: descendants,
                kids,
                isLoading: false
            })
        })
        .catch((error) => this.setState({error, isLoading: false}))

    }

    render() {
        const {id, url, title, by, time, kids, descendants, isLoading, error} = this.state;
        return(
            <ThemeConsumer>
            {(theme) => {
                {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                    title && 
                            <ul>
                                <li className="post-title">
                                    <p className="h2"><a href={url}>{title}</a></p>
                                    <Subtitle id={id} by={by} time={time} descendants={descendants}/>
                                </li>
                                {kids.map((id) => (
                                    <Comment id={id} key={id}/>
                                ))}
                            </ul>
                )} 
            }}
        </ThemeConsumer>
        )
    }
}