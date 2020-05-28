import React from 'react';
import queryString from 'query-string'
import {fetchPostsByUser} from '../util/api'
import Subtitle from './Subtitle'
import News from './News'

export default class User extends React.Component {
    state = {
        created : null,
        id : null,
        karma : null,
        submitted : [],
        isLoading: true,
        error: null
      }

    componentDidMount() {
        const {id} = queryString.parse(this.props.location.search);
        fetchPostsByUser(id)
        .then(({id, karma, submitted, created}) => {
            this.setState({
                id,
                karma,
                submitted,
                created: new Date(created).toLocaleString(),
                isLoading: false
            })
        })
        .catch((error) => this.setState({error, isLoading: false}))

    }

    render() {
        const {id, karma, submitted, created, isLoading, error} = this.state;
        console.log(submitted);
        return(
            <React.Fragment>
            {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                karma && 
                        <ul>
                            <li className="user-title">
                                <h2>{id}</h2>
                                {/* <Subtitle id={id} by={by} time={time} descendants={descendants}/> */}
                                <p className="subtitle">{`joined`} <b>{created}</b> {`has`} <b>{karma}</b> {`karma`}</p>
                                <h2>Posts</h2>
                            </li>
                            {submitted.map((id) => (
                                <News newsID={id} key={id}/>
                            ))}
                        </ul>
            )}
        </React.Fragment>
        )
    }
}