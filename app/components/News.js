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
            // console.log(time);
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

    shouldComponentUpdate(nextProps, nextState) {

        console.log(!this.state.isLoading && nextProps.newsID !== this.props.newsID);
        return true; 

    }    
    
    render() {
        const {id, url, title, by, time, descendants, isLoading, error} = this.state;
        // console.log(id);
        return(
            <React.Fragment>
                {isLoading ? <p>Loading...</p> : error ? <p>{Error.message}</p> : (
                    <li>
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