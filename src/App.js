import React from 'react';
import Header from './components/Header';
import {BitcoinMonitor} from './components/BitcoinMonitor';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header title='Price Monitor' />
        <div className="mt-md-5 mx-md-5">
            <BitcoinMonitor />
        </div>
    </div>
  );
}

export default App;

