import React from 'react';
import ReactPlayer from 'react-player';
import { Link, hashHistory } from 'react-router';

class AudioPlayer extends React.Component{

  constructor(props){
    super(props);
    this.state={duration:0};
  }

  updateDuration(duration){
    this.setState({ duration:duration });
    this.props.updateDuration(this.state.duration);
  }

  onReady(){
    this.props.updateCurrentTime(this.player.player.player.getCurrentTime.bind(this.player.player.player));
    let newSecs = this.props.videoPercentage / 100;
    if (this.player){
      this.player.seekTo(newSecs);
    }
  }

  updatePlayer(player){
    this.player = player;
  }
  render(){
    const {url, playing, config, seeking, videoPercentage, hidden} = this.props;
    let reactPlayer = (
      <ReactPlayer
      className= {this.props.hidden}
      ref={this.updatePlayer.bind(this)}
      url= {url}
      playing= {playing}
      width={'100%'}
      height={'24vw'}
      youtubeConfig={config}
      id='react-player'
      onReady={this.onReady.bind(this)}
      onDuration={this.updateDuration.bind(this)}/>
    );
    let newSecs = this.props.videoPercentage / 100;
    if (seeking){
      if (this.player){
        this.player.seekTo(newSecs);
      }
    }
    return (
      reactPlayer
    );
  }
}

export default AudioPlayer;
