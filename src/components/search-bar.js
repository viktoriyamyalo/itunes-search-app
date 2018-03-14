import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import MdSearch from 'react-icons/lib/md/search';

class SearchBar extends Component {

    onGetTracks(values) {
        const searchTerm = values.search;
        this.props.getTracks(searchTerm)
    }        

    render() {

        const { handleSubmit, pristine, submitting } = this.props;

        return (
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit(this.onGetTracks.bind(this))}>    
                                <Field name="search" component={renderField} type="text" placeholder="Start searching for tracks..." />
                                
                                    <button type="submit" disabled={pristine || submitting} className="btn btn-primary">
                                        Search <MdSearch />
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

const renderField = ({
    input,
    type,
    placeholder
  }) => (
      <div>
        <input {...input} type={type} placeholder={placeholder}/>
      </div>
  );

SearchBar =  connect(null, { getTracks })(SearchBar);

export default reduxForm({
    form: 'search-form',
    onSubmit:(values)=>{
        console.log('values', values);
    }})(SearchBar);