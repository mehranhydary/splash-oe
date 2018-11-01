import React, { Component } from 'react';
import LoadingBar from './loader';
import Contact from './contact';
import Alert from './alert';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="landing" style={{position: "absolute", marginLeft: 0, zIndex: -1}}>
              <img src={require('./Landing Page.svg')} style={{width: 100+"vw"}}/>
        </div>
        <div>
        <span className="logo" style={{position: "relative", marginTop: 0, zIndex: 2}}>
            <img src={require('./Logo on Light (1).svg')} style={{height: 20+"%", width: 20+"%"}}/>
        </span>
        <div className="Blurb1" style={{width: 25+"%", height: 25+"%", marginLeft: 10+"%", marginTop: 8+"%", color: "#343434", position: 'relative', zIndex: 2}}>
          <div style={{fontSize: 2+"vw", marginBottom: 5+"%", fontWeight: 'bold'}}>Ordering food has never been easier.</div>
          <div style={{fontSize: 1.2+"vw"}}>Overeasy will make it easy for restaurants to take orders quickly without a cashier.</div>
        </div>
        <div className="Blurb2" style={{width: 85+'%', height: 8+'%', paddingLeft: 52+"%", marginTop: 10+"%", color: "#343434", position: 'relative', zIndex: 2}}>
          <div style={{fontSize: 2+"vw", marginBottom: 5+"%", fontWeight: 'bold'}}>We're a simple tablet-based self-order kiosk application.</div>
          <div style={{fontSize: 1.2+"vw"}}>Customers simply choose dine-in or take-out, add items from the menu and check out on spot.</div>
        </div>
        <div className="Blurb3" style={{height: 8+'%', paddingLeft: 8+"%", marginTop: 20+"%", color: "white", position: 'relative', zIndex: 2}}>
          <div style={{fontSize: 2+"vw", marginBottom: 1+"%", marginLeft: 2.3+"%",fontWeight: 'bold'}}>Interested in learning more?</div>
          <div style={{fontSize: 1.2+"vw", marginLeft: 2.3+"%", marginBottom: 2+"%"}}>Drop your email below and we'll be sure to contact you when we release our beta</div>
        </div>
        <div className="row" style={{marginTop: 15+"px", position: "relative"}}><Alert /></div>
        </div>
        <div className='row' style={{position: "absolute", paddingLeft: 9+"%", zIndex: 1}}>
          {/* <LoadingBar /> */}
          <Contact />
        </div>
      </div>
    );
  }
}