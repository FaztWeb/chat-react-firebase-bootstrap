import React, { Component } from 'react';
import { render } from 'react-dom';

import ChatRoom from './components/ChatRoom';

class App extends Component {
  render() {
   return (
    <div>
      <nav className="navbar navbar-light bg-primary text-white">
        <a className="navbar-brand">React Chat</a>
      </nav>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ChatRoom/>
          </div>
        </div>
      </div>
    </div>
   ) 
  }
}

render(
  <App/>,
  document.getElementById('app')
);
