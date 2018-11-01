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
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{position: "relative", marginLeft: 10+"%"}}>
            <div className={this.props.alert._class} role="alert">
              {this.props.alert._message}
              <button type="button" onClick={this.closeAlert} className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
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