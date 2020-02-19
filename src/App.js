import React from 'react';
import './App.css';

class HomePage extends React.Component {

  render() {
    return (
        <div className='home'>
            <img src="/images/home.png"/>
        </div>
    );
  }

}

class App extends React.Component {

    render() {
        return (
            <div className='App'>
                <HomePage />
            </div>
        );
    }

}


export default App;
