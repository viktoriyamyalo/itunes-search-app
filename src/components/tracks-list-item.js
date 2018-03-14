import React, { Component } from 'react';
import  {connect} from 'react-redux';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import TiNotes from 'react-icons/lib/ti/notes';
import { selectTrack } from '../actions/index';

class TracksListItem extends Component {


    render() {

        let track = this.props.track;
        let trackDuration = new Date(track.trackTimeMillis);
        trackDuration = `${trackDuration.getUTCMinutes()}:${trackDuration.getUTCSeconds()}`;

        if(this.props.selectedTrack.selectedTrack && this.props.selectedTrack.selectedTrack.trackId === track.trackId) {
            return (
            <div onClick={this.props.selectTrack.bind(this, track)} className="container">

                <div className="row">
                    <div className="col-md-2">
                        <img src={track.artworkUrl60} alt={track.collectionCensoredName} />
                    </div>

                    <div className="col-md-2">
                        {track.artistName}
                    </div>

                    <div className="col-md-2">
                        {track.trackCensoredName}
                    </div>

                    <div className="col-md-2">
                        {track.collectionCensoredName}
                    </div>

                    <div className="col-md-2">
                        {track.primaryGenreName}
                    </div>

                    <div className="col-md-2">
                        <TiMinus />
                    </div>
                </div>

                <div className="row">
                    
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h5>
                            {track.artistName}: {track.trackCensoredName}
                            <TiNotes />
                        </h5>
                    </div>
                    <div className="col-md-6"></div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <p><span>Collection:</span> {track.collectionCensoredName}</p>
                        <p><span>Track Count:</span> {track.trackCount}</p>
                        <p>Price: {track.collectionPrice} USD</p>
                    </div>
                    <div className="col-md-4">
                        <p><span>Track Duration:</span> {trackDuration} min</p>
                        <p><span>Track Price:</span> {track.trackPrice} USD</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
            </div>
            
            );
        }

        return (
            <div onClick={this.props.selectTrack.bind(this, track)} className="container">

                <div className="row">
                    <div className="col-md-2">
                        <img src={track.artworkUrl60} alt={track.collectionCensoredName} />
                    </div>

                    <div className="col-md-2">
                        {track.artistName}
                    </div>

                    <div className="col-md-2">
                        {track.trackCensoredName}
                    </div>

                    <div className="col-md-2">
                        {track.collectionCensoredName}
                    </div>

                    <div className="col-md-2">
                        {track.primaryGenreName}
                    </div>

                    <div className="col-md-2">
                        <TiPlus />
                    </div>
                </div>
            </div>
            
            );
    }
}

const mapStateToProps = (state) => { 
    return { selectedTrack: state.selectedTrack };
  };

export default connect(mapStateToProps, { selectTrack })(TracksListItem);