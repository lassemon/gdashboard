import React from 'react';

class AudioItem extends React.Component{
  render(){
    return (
      <li>
        <div className="item">
          <span className="name">{this.props.item}</span>
        </div>
      </li>
    );
  }
};

export default AudioItem;
