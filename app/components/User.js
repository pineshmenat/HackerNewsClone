import React from 'react';
import queryString from 'query-string'
import {fetchPostsByUser} from '../util/api'
import {formatDate} from '../util/helpers'
import Subtitle from './Subtitle'
import News from './News'
import {ThemeConsumer} from '../context/theme'

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
                created: formatDate(created),
                isLoading: false
            })
        })
        .catch((error) => this.setState({error, isLoading: false}))

    }

    render() {
        const {id, karma, submitted, created, isLoading, error} = this.state;
        console.log(submitted);
        return(
            <ThemeConsumer>
                {({theme}) => (
                <React.Fragment>
                    {isLoading ? <p>Loading...</p> : error ? <p>{error.message}</p> : (
                        karma && 
                                <ul>
                                    <li className="nav">
                                        <h1 style={{marginBottom: "5px"}}>{id}</h1>
                                        <p className={`subtitle-${theme}`}>{`joined`} <b>{created}</b> {`has`} <b>{karma}</b> {`karma`}</p>
                                        <h1>Posts</h1>
                                    </li>
                                    {submitted.map((id) => (
                                        <News newsID={id} key={id}/>
                                    ))}
                                </ul>
                    )}
                </React.Fragment>)}
            </ThemeConsumer>
        )
    }
}