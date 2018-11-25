import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { showHideAlert } from '../actions/index';

class Alert extends Component {
  constructor(props){
     super(props);
     this.closeAlert = this.closeAlert.bind(this);
  }
  closeAlert(){
    this.props.showHideAlert('', 'hide-alert');
  }
  render(){
    return(
        <div style={{position: "relative", padding: 0}}>
            <div className={this.props.alert._class} role="alert" style={{fontSize: 1+"vw", height: 6+"vh", margin: 0}}>
              {this.props.alert._message}
              <button type="button" onClick={this.closeAlert} className="close" data-dismiss="alert" aria-label="Close" style={{marginTop: 0}}>
                <span aria-hidden="true" style={{verticalAlign: "middle", fontSize: 1.3+"vw"}}>&times;</span>
              </button>
            </div>
        </div> 
    );
  }
}

const mapStateToProps = ({alert}) => {
  return {alert};
};

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({showHideAlert}, dispatch);
};

export default connect(mapStateToProps, mapStateToDispatch)(Alert);