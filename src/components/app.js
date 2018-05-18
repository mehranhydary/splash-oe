import React, { Component } from 'react';
import LoadingBar from './loader';
import Contact from './contact';
import Alert from './alert';

export default class App extends Component {
  render() {
    return (
        <div className='row'>
          <LoadingBar />
          <Alert />
          <Contact />
        </div>
    );
  }
}