import React, { Component } from 'react';
import './AudioList.scss';
import Audio from '../Audio/Audio';

class AudioList extends Component {
  constructor(props){
    super(props);
  }

  renderBites(){
    return this.props.list.tracks.map((bite, index) =>
      <div key={index}>
        <Audio bite={bite}/>
      </div>
    )
  }

  render() {
    return (
      <div className="AudioList">
        <div className="author">
          <img className="author__img" src={`images/${this.props.list.img}`} alt={this.props.list.author}/>
          <h2 className="author__title">{this.props.list.author}</h2>
        </div>
        <div className="bites">
          {this.renderBites()}
        </div>
      </div>
    );
  }
}

export default AudioList;
