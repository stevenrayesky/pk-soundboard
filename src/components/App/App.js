import React, { Component } from 'react';
import './App.scss';
import data from '../../audio.json';
import AudioList from '../AudioList/AudioList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ 
      data: data
    })
  }

  renderLists() {
    const lists = this.state.data.map((list, index) =>
      <AudioList key={index}
        list={list}/>
      );
    return lists;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PK Soundboard</h1>
        </header>
        {this.renderLists()}
      </div>
    );
  }
}

export default App;
