import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getData } from './actionCreators';

class App extends Component {

handleClick=()=>{
  this.props.dispatch(getData());}

showData=()=>{

  return this.props.data.map(el=>(
    <div key={el.name}>{el.name}</div>))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.handleClick}>GET</button>
         {this.showData()}


        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data.results,
  };
}

export default connect(mapStateToProps)(App);