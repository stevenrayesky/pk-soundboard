import React, { Component } from 'react';
import './Audio.scss';

class Audio extends Component {
  constructor(props){
    super(props);
    
    this.audioTag = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.audioTag.current.play();
  }

  render() {
    return (
      <div className="Audio" onClick={(e) => this.handleClick(e)}>
        <div>{this.props.bite.title}</div>
        <audio ref={this.audioTag} src={`audio/${this.props.bite.src}`}></audio>
      </div>
    );
  }
}

export default Audio;
