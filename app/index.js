import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import TopNews from './components/TopNews'
import NewNews from './components/NewNews'
import Navbar from './components/Navbar'
import './index.css';
import {ThemeProvider} from './context/theme'

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
                            <Switch>
                                <Route exact path="/" component={TopNews}/>
                                <Route exact path="/new" component={NewNews}/>
                            </Switch>
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