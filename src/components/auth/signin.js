/* eslint react/prop-types: 0 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form'

class Signin extends Component {
  handleFormSubmit({username, password}) {
    console.log(username, password);
    //Need to do something to log user in
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
        <button action="submit" className="btn btn-primary">Sign In</button>
    </form>

  );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
})(Signin);
