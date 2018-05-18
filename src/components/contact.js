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
               this.props.showHideAlert(res.payload.data.msg,'alert alert-danger alert-dismissible show-alert')
            ) : ( 
               this.props.showHideAlert(res.payload.data.msg,'alert alert-success alert-dismissible show-alert'),
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
      const style = { 'margin' : '10px 0', 'width' : '100%' }
      return(
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2>Email Subscription</h2>
            <form style={style} onSubmit={this.onSubmitLocation.bind(this)}>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" onChange={this.handleChange} className="form-control" name="email_address" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" onChange={this.handleChange} name="first_name" className="form-control" name="first_name" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" onChange={this.handleChange} name="last_name" className="form-control" name="last_name" placeholder="Enter last name" />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
            <h2>Subscribers List</h2>
            <ul className="list-group">
              { this.state.members_list.map((li, i) => {
                  return <li className="list-group-item" key={i} id={li.id}> <strong>Email Address:</strong> {li.email_address} - <strong>Name:</strong> {li.merge_fields.FNAME} {li.merge_fields.LNAME}</li>
                })
              }
            </ul>
         </div>
      );
   }
}

const mapStateToDispatch = (dispatch) => {
  return bindActionCreators({ list, contact, showHideAlert, showHideLoader }, dispatch);
};

export default connect(null, mapStateToDispatch)(Contact);