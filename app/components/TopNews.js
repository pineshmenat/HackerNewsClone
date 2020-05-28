import React from 'react'
import News from './News'
import {fetchNewsIDsByType} from '../util/api.js'

export default class TopNews extends React.Component {
    state = {
        newsIDs: [],
        isLoading: true,
        error: null
    }

    componentDidMount() {
        this.handlefetch();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.type !== this.props.type) this.handlefetch();
    }

    handlefetch() {
        const {type} = this.props;
        console.log(type);
        fetchNewsIDsByType(type)
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