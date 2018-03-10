import React from 'react';

interface Props { item: string; key: string; }
interface State { }

class VideoItem extends React.Component<Props, State> {
  render() {
    return (
      <li>
        <div className="item">
          <span className="name">video: {this.props.item}</span>
        </div>
      </li>
    );
  }
}

export default VideoItem;
