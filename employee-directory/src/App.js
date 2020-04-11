import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from "./utils/api"

class App extends React.Component {
 
  state = {employees:[]}

  componentDidMount() {
    api.getEmployeeInfo().then(res => {
      this.setState({ employees: res.data})
    })
  }

  render() {

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}
export default App;
