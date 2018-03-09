import React from 'react';

interface Props { item: string; key: number; }
interface State { }

class AudioItem extends React.Component<Props, State> {
  render() {
    return (
      <li>
        <div className="item">
          <span className="name">{this.props.item}</span>
        </div>
      </li>
    );
  }
}

export default AudioItem;
