import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <Main />
            </div>
        );
    }
}

export default App;
