import React, { Component } from 'react';
import logo from './logo.svg';
import Icon from './Icon';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			color: '#000'
		};
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">goorm<br />REACT ICON</h1>
        </header>
				<div className="color">
					Color : <input value={this.state.color} onChange={(v)=>this.setState({color:v.target.value})}></input>
				</div>
				<Icon iconId="course" color={this.state.color} size="35px"/>
      </div>
    );
  }
}

export default App;
