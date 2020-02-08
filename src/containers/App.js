import React from 'react';
import Header from '../components/Header';
import MainApp from '../containers/MainApp';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <MainApp />
      </div>
    )
  }
}

export default App;