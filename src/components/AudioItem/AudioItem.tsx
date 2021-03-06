import React from 'react';

interface Props { item: string; key: string; }
interface State { }

class AudioItem extends React.Component<Props, State> {
  render() {
    return (
      <li>
        <div className="item">
          <span className="name">audio: {this.props.item}</span>
        </div>
      </li>
    );
  }
}

export default AudioItem;
