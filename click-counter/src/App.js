import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render()
    {
        return (
            <div onClick={this.props.click}>This div has been clicked {this.props.clicks} times.</div>
        )
            ;
    }
}

export default App;
