import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css';
import ThemeContext from './context/theme'
import * as serviceWorker from './worker';

const NewsList = React.lazy(()=> import('./components/NewsList'));
const Post = React.lazy(() => import('./components/Post'));
const User = React.lazy(()=> import('./components/User'));

function App(){
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light") );
    }

    return(
        <Router>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={`${theme}`}>
                <div className={`container`}>
                        <Navbar/>
                        <React.Suspense fallback={<p>Loading...</p>}>
                            <Switch>
                                <Route exact path="/" render={()=> <NewsList type="top"/> }/>
                                <Route path="/new" render={()=> <NewsList type="new"/>} />
                                <Route path="/user" component={User}/>
                                <Route path="/post" component={Post}/>
                            </Switch>
                        </React.Suspense>
                </div>
            </div>
        </ThemeContext.Provider>
        </Router>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
serviceWorker.register();