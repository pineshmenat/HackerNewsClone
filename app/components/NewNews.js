import React from 'react'
import News from './News'
import {fetchNewsIDsByType} from '../util/api.js'

export default class NewNews extends React.Component {
    state = {
        newsIDs: [],
        isLoading: true,
        error: null
    }

    componentDidMount() {
        fetchNewsIDsByType("new")
        .then((newsIDs) => this.setState({newsIDs, isLoading: false}))
        .catch((error) => this.setState({error, isLoading: false}))
    }

    render() {
        const {isLoading, error, newsIDs} = this.state;
        return (
             <ul>
                {isLoading === true ? <p>Loading...</p> : (error !== null ? <p>Error!</p> :
                    newsIDs.map((id) => {
                        return <News newsID={id} key={id}/>
                    })  
                )}
             </ul>
        );
    }
}