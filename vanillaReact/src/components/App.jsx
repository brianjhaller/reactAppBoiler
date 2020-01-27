import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header.jsx';
import TaskContainer from './TaskContainer.jsx';
import Auth from './Auth.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pass: ""
    }
    this.login = this.login.bind(this);
    this.setName = this.setName.bind(this);
    this.setPass = this.setPass.bind(this);


  }

  login () {
    this.props.auth.login();
    this.setState({});
  }

  setName (e) {
    this.setState({ name: e.target.value })
  }

  setPass (e) {
    this.setState({ pass: e.target.value })
  }

  render () {
    return (
      <div>
      <h1>Render attempt</h1>
      {
        this.props.auth.authenticate() &&
        <div>
          <Header userInfo={this.props.auth.userInfo()} />
          <TaskContainer />
        </div>
      }
      {
        !this.props.auth.authenticate() &&
        <div>
          <h1>You need to log in.</h1>
          <input type="text" value={this.state.name} onChange={e => this.setName(e)}></input>
          <input type="text" value={this.state.pass} onChange={e => this.setPass(e)}></input>
          <input type="submit" onClick={this.login}></input>
        </div>
      }
      </div>
    );
  }
}

export default App;
