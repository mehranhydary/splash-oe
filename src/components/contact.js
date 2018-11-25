import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { list, contact, showHideAlert, showHideLoader } from '../actions/index';

class Contact extends Component {
   constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { email_address: '', first_name: '', last_name: '', members_list: [], loadingInterval: false, loadingIntervalWidth: 0 };
   }
   componentDidMount() {
      this.getMailingList();
   }
   handleChange(e){      
      this.setState({ [e.target.name] : e.target.value });
   }
   getMailingList(){
      this.props.list().then( (res) => {
         this.setState({ members_list: res.payload.data.members });
      });
   }
   onSubmitLocation(e){
     e.preventDefault();
     ( this.state.email_address !== '' || this.state.first_name !== '' || this.state.last_name !== '' ) ? (
         this.setState({ members_list: [] }),
         this.startProgress(),
         this.props.contact( this.state.email_address, this.state.first_name, this.state.last_name ).
         then( (res) => {
            res.payload.data.status === 400 ? (
               this.props.showHideAlert(res.payload.data.msg,'alert alert-warning alert-dismissible show-alert push-down')
            ) : ( 
               this.props.showHideAlert(res.payload.data.msg,'alert alert-success alert-dismissible show-alert push-down'),
               this.getMailingList()
            )
         })
     ) : (
         this.props.showHideAlert('Please fill in all the fields!','alert alert-danger alert-dismissible show-alert')
     )
   }
   startProgress(){
      !this.state.loadingInterval ? (
          this.props.showHideLoader({ 'width' : '0%', 'display' : 'block' }),
          this.setState({ loadingIntervalWidth : 0, loadingInterval: setTimeout(this.incrementProgress.bind(this), 50) })
      ) : ( null );
   }
   incrementProgress(){
      this.props.showHideLoader({ 'width' : this.state.loadingIntervalWidth.toString() + "%", 'display' : 'block' });
      this.setState({ loadingIntervalWidth: this.state.loadingIntervalWidth + 1 });
      this.state.loadingIntervalWidth < 100 && Object.keys(this.state.members_list).length == 0 ? (
          this.setState({ loadingInterval : setTimeout(this.incrementProgress.bind(this), 50) })
      ) : (
          this.props.showHideLoader({ 'width' : '0%', 'display' : 'none' })
      )
   }
   render(){
      return(
         <div className="container" style={{margin: 0}}>
            <form className="form-inline row" onSubmit={this.onSubmitLocation.bind(this)} style={{display: "inline"}}>
                <span className="form-group col-sm-2 col-xs-2" style={{padding: 0}}>
                  <div className="input-group">
                    <span class="input-group-addon"><label style={{color: "#FFE687", fontSize: 1.2+"vw"}}>First Name</label></span>
                    < input type="text" onChange={this.handleChange} name="first_name" className="form-control" name="first_name" placeholder="Enter first name" style={{width: 12+"vw", height: 5+"vh", fontSize: 0.8+"vw", position: "absolute"}} />
                  </div>
                </span>
                <span className="form-group col-sm-2 col-xs-2" style={{padding: 0}}>
                  <div className="input-group">
                    <span class="input-group-addon"><label style={{color: "#FFE687", fontSize: 1.2+"vw"}}>Email</label></span>
                    <input type="email" onChange={this.handleChange} className="form-control" name="email_address" placeholder="Enter email" style={{width: 12+"vw", height: 5+"vh", fontSize: 0.8+"vw", position: "absolute"}}/>
                  </div>
                </span>
                {/* <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" onChange={this.handleChange} name="last_name" className="form-control" name="last_name" placeholder="Enter last name" />
                </div> */}
                <div className="form-group col-sm-2 col-xs-2" style={{padding: 0, marginTop: 2.5+"%"}}>
                  <div className="input-group">
                    <button type="submit" className="btn btn-info" style={{width: 10+"vw", fontSize: 1+"vw", position: "absolute", height: 5+"vh", padding: 0}}>Submit</button>
                  </div>
                </div>
            </form>
         </div>
      );
   }
}

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({ list, contact, showHideAlert, showHideLoader }, dispatch);
};

export default connect(null, mapStateToDispatch)(Contact);