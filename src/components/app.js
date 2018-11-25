import React, { Component } from 'react';
import LoadingBar from './loader';
import Contact from './contact';
import Alert from './alert';
import ScrollableAnchor from 'react-scrollable-anchor'
import style from '../css/style.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-lg-12 col-med-12 col-sm-12 col-xs-12" style={{position: "absolute", marginLeft: 0, zIndex: -1}}>
                  <img src={require('./Landing Page.svg')} style={{width: 100+"vw"}}/>
            </div>
        </div>
        <div className="row LOGO">
            <div className="col-lg-3 col-med-3 col-sm-3 col-xs-3" style={{position: "relative", marginTop: 0, zIndex: 2}}>
                <img src={require('./Logo on Light (1).svg')} style={{marginTop: 5+"%", width: 100+"%"}}/>
            </div>
            <div>
                <div className="col-lg-9 col-med-9 col-sm-9 col-xs-9"></div>
            </div>
        </div>
        <div className="row BLURB1 top-buffer-5">
            <div>
                <div className="col-lg-1 col-med-1 col-sm-1 col-xs-1"></div>
            </div>
            <div className="col-lg-4 col-med-4 col-sm-4 col-xs-4" style={{color: "#343434", position: 'relative', zIndex: 2}}>
                <div style={{fontSize: 2+"vw", marginBottom: 5+"%", fontWeight: 'bold'}}>Ordering food has never been easier.</div>
                <div style={{fontSize: 1.2+"vw"}}>Overeasy will make it easy for restaurants to take orders quickly without a cashier.</div>
            </div>
            <div>
                <div className="col-lg-7 col-med-7 col-sm-7 col-xs-7"></div>
            </div>
        </div>
        <div className="row top-buffer"></div>
        <div className="row BLURB2 top-buffer-15">
            <div>
                <div className="col-lg-7 col-med-7 col-sm-7 col-xs-7"></div>
            </div>
            <div className="col-lg-4 col-med-4 col-sm-4 col-xs-4" style={{color: "#343434", position: 'relative', zIndex: 2}}>
                <div style={{fontSize: 2+"vw", marginBottom: 5+"%", fontWeight: 'bold'}}>We're a simple tablet-based self-order kiosk application.</div>
                <div style={{fontSize: 1.2+"vw"}}>Customers simply choose dine-in or take-out, add items from the menu and check out on spot.</div>
            </div> 
            <div>
                <div className="col-lg-1 col-med-1 col-sm-1 col-xsq-1"></div>
            </div>
        </div>
        <div className="row EMAILSIGNUP top-buffer-17">
            <div>
                <div className="col-lg-1 col-med-1 col-sm-1 col-xs-1"></div>
            </div>
            <div className="col-lg-4 col-med-4 col-sm-4 col-xs-4" style={{color: "white", position: 'relative', zIndex: 2}}>
                <div style={{fontSize: 2+"vw", marginBottom: 1+"%", fontWeight: 'bold'}}>Interested in learning more?</div>
                <div style={{fontSize: 1.2+"vw", marginBottom: 2+"%"}}>Drop your email below and we'll be sure to contact you when we release our beta</div>
            </div>
            <div>
                <div className="col-lg-7 col-med-7 col-sm-7 col-xs7"></div>
            </div>
        </div>
        <div className="row ALERT" style={{margin: 0, padding: 0}}>
            <div>
                <div className="col-lg-1 col-med-1 col-sm-1 col-xs-1"></div>
            </div>
            <div className="col-lg-7 col-med-7 col-sm-7 col-xs-7" style={{position: "relative", padding: 0}}><Alert /></div>
            <div>
                <div className="col-lg-4 col-med-4 col-sm-4 col-xs-4"></div>
            </div>
        </div>
        <div className="row CONTACT">
            <div>
                <div className="col-lg-1 col-med-1 col-sm-1 col-xs-1"></div>
            </div>
            <div className="row" style={{margin: 0, padding: 0, position: "relative", zIndex: 1}}>
                <div className="col-lg-11 col-med-11 col-sm-11 col-xs-11" style={{padding: 0}}>
                  <Contact />
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}