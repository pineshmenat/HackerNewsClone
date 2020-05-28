import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css';
import {ThemeProvider} from './context/theme'

const TopNews = React.lazy(()=> import('./components/TopNews'));
const Post = React.lazy(() => import('./components/Post'));
const User = React.lazy(()=> import('./components/User'));

class App extends React.Component {
    state = {
        theme: "light",
        toggleTheme : () => {
            this.setState((prevState) => ({
                theme: (prevState.theme === "light") ? "dark" : "light" 
            }))
        }
    }

    render() {
        return(
            <Router>
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                    <div className={`container`}>
                            <Navbar/>
                            <React.Suspense fallback={<p>Loading...</p>}>
                                <Switch>
                                    <Route exact path="/" render={()=> <TopNews type="top"/> }/>
                                    <Route path="/new" render={()=> <TopNews type="new"/>} />
                                    <Route path="/user" component={User}/>
                                    <Route path="/post" component={Post}/>
                                </Switch>
                            </React.Suspense>
                    </div>
                </div>
            </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)