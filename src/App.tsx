import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { Route } from 'react-router-dom';
import './index.css';
import Home from './routes/Home/';
import Podcasts from './routes/Podcasts/';
import News from './routes/News/';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact={true} path="/" component={Home} key="home" />
            <Route path="/podcasts" component={Podcasts} key="podcasts" />
            <Route path="/news" component={News} key="news" />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
