import React from 'react';
import './App.css';
import CoreLayout from './layouts/CoreLayout/'

class App extends React.Component {
  render() {
    return (
      <main className="gdashboard">
        <CoreLayout />
      </main>
    );
  }
}

export default App;
