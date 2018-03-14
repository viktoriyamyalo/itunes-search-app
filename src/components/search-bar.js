import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../actions/index';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {

    onGetTracks(values) {
        const searchTerm = values.search;
        this.props.getTracks(searchTerm)
    }        

    render() {

        const { handleSubmit, pristine, submitting } = this.props;

        return (
            
            <form onSubmit={handleSubmit(this.onGetTracks.bind(this))}>    
                <Field name="search" component={renderField} type="text" placeholder="Start searching for tracks..." />

                <button type="submit" disabled={pristine || submitting} className="btn btn-primary">
                    Search
                </button>
            </form>
        );
    }
}

const validate = values => {
    const errors = {}
    if (!values.search) {
      errors.search = 'Please start searching by typing';
    } return errors;
  };

const renderField = ({
    input,
    type,
    placeholder,
    meta: { touched, error, warning },
  }) => (
      <div>
        <input {...input} type={type} placeholder={placeholder}/>
        {touched && error && <div>{error}</div>}
      </div>
  );

SearchBar =  connect(null, { getTracks })(SearchBar);

export default reduxForm({
    form: 'search-form',
    validate,
    onSubmit:(values)=>{
        console.log('values', values);
    }})(SearchBar);