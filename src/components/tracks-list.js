import React, { Component } from 'react';
import { connect } from 'react-redux';
import TracksListItem from './tracks-list-item';
import { getTracks } from '../actions/index';

class TracksList extends Component {
    
    // call getTracks once the component mounts so that the page 
    // gets initially populated with tracks
    componentDidMount() {
        this.props.getTracks('The Beatles');
    }

    render() {

        if(this.props.tracks.tracks) {

            const tracks = this.props.tracks.tracks.data.results.map(track => <TracksListItem track={track} key={track.trackId}/>);
        

            return (
            <div className="container container-fluid" id="tracks-container" style={style}>
                <div className="container" id="tracks-headers-container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">Artist</div>
                        <div className="col-sm-2">Track</div>
                        <div className="col-sm-2">Collection</div>
                        <div className="col-sm-2">Genre</div>
                        <div className="col-sm-2"></div>
                    </div>
                </div> 
                {tracks}
            </div>);
            }
        
        // in case initial loading takes a long time
        return (
            <div className="container" style={{marginTop:20}}>
            Your tracks will appear here shortly...
            </div>
        );
    }
}

const style = {
    marginTop: 20,
    textAlign: 'left',
    padding: '5px 0'
};

const mapStateToProps = (state) => { 
    return { tracks: state.tracks };
  };

export default connect(mapStateToProps, { getTracks })(TracksList);
