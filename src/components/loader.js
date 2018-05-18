import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
    render(){
       return(
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
             <div className="loader" style={this.props.loader}></div>
          </div>
       );
    }
}

const mapStateToProps = ({loader}) => {
   return {loader};
};
export default connect(mapStateToProps)(Loader);