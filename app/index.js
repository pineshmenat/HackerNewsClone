import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles.css';
import ThemeContext from './context/theme'
import * as serviceWorker from './worker';

const NewsList = React.lazy(()=> import('./components/NewsList'));
const Post = React.lazy(() => import('./components/Post'));
const User = React.lazy(()=> import('./components/User'));

function App(){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light") );
    }

    return(
        <Router>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={`${theme}`}>
                <div className={`dark:bg-black dark:text-gray-300 m-0 font-sans`}>
                    <div className="xl:max-w-5xl lg:max-w-4xl md:max-w-3xl my-0 mx-auto py-10 px-5">
                            <Navbar/>
                            <React.Suspense fallback={<p>Loading...</p>}>
                                <Switch>
                                    <Route exact path="/" render={()=> <NewsList type="top"/> }/>
                                    <Route path="/new" render={()=> <NewsList type="new"/>} />
                                    <Route path="/best" render={()=> <NewsList type="best"/>} />
                                    <Route path="/ask" render={()=> <NewsList type="ask"/>} />
                                    <Route path="/show" render={()=> <NewsList type="show"/>} />
                                    <Route path="/job" render={()=> <NewsList type="job"/>} />
                                    <Route path="/user" component={User}/>
                                    <Route path="/post" component={Post}/>
                                </Switch>
                            </React.Suspense>
                    </div>
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