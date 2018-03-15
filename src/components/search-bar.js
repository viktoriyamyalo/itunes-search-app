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
                        <form onSubmit={handleSubmit(this.onGetTracks.bind(this))}> 
                            <div className="row"> 
                                <div className="col-md-12">  
                                    <div className="input-group">
                                        <Field name="search" component={renderField} className="form-control" type="text" placeholder="Start searching for tracks" />
                                        
                                        <span className="input-group-btn">
                                            <button type="submit" disabled={pristine || submitting} className="btn btn-default">
                                                <MdSearch />
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
        );
    }
}

const renderField = ({
    input,
    type,
    placeholder,
    className
  }) => (
      <div>
        <input {...input} type={type} placeholder={placeholder} className={className}/>
      </div>
  );

SearchBar =  connect(null, { getTracks })(SearchBar);

export default reduxForm({
    form: 'search-form',
    onSubmit:(values)=>{
        console.log('values', values);
    }})(SearchBar);