import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{
  render(){
    const {handleSubmit, fields: {username, password, passwordConfirm}} = this.props;

    return (
      <form>
        <fieldset className='form-group'>
          <label>username:</label>
          <input className='form-control' {...username}></input>
        </fieldset>
        <fieldset className='form-group'>
          <label>password:</label>
          <input className='form-control' {...password}></input>
        </fieldset>
        <fieldset className='form-group'>
          <label>confirm password:</label>
          <input className='form-control' {...passwordConfirm}></input>
        </fieldset>
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signup',
  fields: ['username, password', 'passwordConfirm']
})(Signup);
