import React from 'react';

interface Props { item: string; key: string; }
interface State { }

class ArticleItem extends React.Component<Props, State> {
  render() {
    return (
      <li>
        <div className="item">
          <span className="name">article: {this.props.item}</span>
        </div>
      </li>
    );
  }
}

export default ArticleItem;
