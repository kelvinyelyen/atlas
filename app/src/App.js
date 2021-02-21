import React from 'react';
import './App.css';
import Widgets from './components/Widgets';
import DataContextProvider from './contexts/DataContext';



function App() {
  return (
    <div className="App">
      <DataContextProvider>
          <Widgets/>
      </DataContextProvider>
    </div>
  );
}

export default App;
