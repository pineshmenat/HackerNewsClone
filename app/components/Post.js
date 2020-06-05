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
        console.log("POST:  id: ", id);
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
            {({theme}) => (
                isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                    title && 
                    <ul>
                        <li className="nav">
                            <h1 style={{marginBottom: "5px"}}><a className="link" target="_blank" href={url}>{title}</a></h1>
                            <Subtitle theme={theme} id={id} by={by} time={time} descendants={descendants}/>
                        </li>
                        <p></p>
                        {kids.map((id) => (
                            <Comment id={id} key={id}/>
                        ))}
                    </ul>
                )
            )
            }
        </ThemeConsumer>
        )
    }
}