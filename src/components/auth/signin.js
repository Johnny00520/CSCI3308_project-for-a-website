/* eslint react/prop-types: 0 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({username, password}) {
    this.props.signinUser({username, password});
    //Need to do something to log user in
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oh no!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }


  render() {

    const {handleSubmit, fields: {username, password}} = this.props;

    return (
      <form className="form-group" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label><span><i className="fa fa-user" aria-hidden="true"></i></span> Username:</label>
          <input {...username} type="text" className="form-control"/>
        </fieldset>
        <fieldset>
          <label><span><i className="fa fa-key" aria-hidden="true"></i></span> Password:</label>
          <input {...password} type="password" className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
    </form>

  );
  }
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  };
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, actions)(Signin);
