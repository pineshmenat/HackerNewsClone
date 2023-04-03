import React, { useState } from 'react'
import * as ReactDOMClient from 'react-dom/client';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css';
import ThemeContext from './context/theme'
import reportWebVitals from './reportWebVitals';

const NewsList = React.lazy(()=> import('./components/NewsList'));
const Post = React.lazy(() => import('./components/Post'));
const User = React.lazy(()=> import('./components/User'));

function App(){
    const [theme, setTheme] = useState<"dark"| "light">("dark");

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
const container = document.getElementById('root');
if(!container) throw Error("Failed to initialize app");
const root = ReactDOMClient.createRoot(container);
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
