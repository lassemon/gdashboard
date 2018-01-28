import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ItemList from '../../components/ItemList/'

class Podcasts extends React.Component {
  render() {
    return (
      <div className="">
        <h1>Podcasts</h1>
        {/*<button onClick={() => this.props.changePage()}>Go to home</button>*/}
        <ItemList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Podcasts);
