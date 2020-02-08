import React from 'react';
import Header from '../components/Header';
import MainApp from '../containers/MainApp';
import AppContainer from '../assets/css/App.style'

class App extends React.Component{
  render(){
    return(
      <AppContainer>
        <Header />
        <MainApp />
      </AppContainer>
    )
  }
}

export default App;