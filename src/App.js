import React, { Component } from 'react';
import store from './Redux/store';
import Judge from './Components/judge'
import { Provider }from 'react-redux';
class App extends Component {
  render() {
    return(
      <Provider store = {store}>
      <Judge />
      {console.log('App return', this.props)}
      <div className="app">
      <h1 style={{textAlign: "center"}}>***Hello Redux***</h1>
      </div>
      </Provider>
    )
  }
}
export default App;