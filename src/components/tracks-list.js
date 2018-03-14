import React, { Component } from 'react';
import { connect } from 'react-redux';
import TracksListItem from './tracks-list-item';

class TracksList extends Component {
    


    render() {

        if(this.props.tracks.tracks) {

            const tracks = this.props.tracks.tracks.data.results.map(track => <TracksListItem track={track} key={track.trackId} />);
        

            return (
            <div className="container container-fluid" id="tracks-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-2">Artist</div>
                        <div className="col-md-2">Track</div>
                        <div className="col-md-2">Collection</div>
                        <div className="col-md-2">genre</div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                {tracks}
            </div>);
            }
        

        return (
            <div>
            Please search for some tracks!
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { tracks: state.tracks };
  };

export default connect(mapStateToProps)(TracksList);
