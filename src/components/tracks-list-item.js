import React, { Component } from 'react';
import  {connect} from 'react-redux';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import TiNotes from 'react-icons/lib/ti/notes';
import { selectTrack } from '../actions/index';

class TracksListItem extends Component {


    render() {

        let track = this.props.track;
        
        // calculate track duration based on milliseconds
        let trackMinutes = Math.floor(track.trackTimeMillis / 60000); 
        let trackSeconds = ((track.trackTimeMillis % 60000) / 1000).toFixed(0);
        let trackDuration = trackSeconds < 10 ? `${trackMinutes}:0${trackSeconds}` : `${trackMinutes}:${trackSeconds}`;

        if(this.props.selectedTrack.selectedTrack && this.props.selectedTrack.selectedTrack.trackId === track.trackId) {
            return (
            <div onClick={this.props.selectTrack.bind(this, track)} className="container" style={style}>

                <div className="row">
                    <div className="col-sm-2">
                        <img src={track.artworkUrl60} alt={track.collectionCensoredName} />
                    </div>

                    <div className="col-sm-2">
                        {track.artistName}
                    </div>

                    <div className="col-sm-2">
                        {track.trackCensoredName}
                    </div>

                    <div className="col-sm-2">
                        {track.collectionCensoredName}
                    </div>

                    <div className="col-sm-2">
                        {track.primaryGenreName}
                    </div>

                    <div className="col-sm-2">
                        <TiMinus />
                    </div>
                </div>

                <div className="row">
                    
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <h4>
                            {track.artistName}: {track.trackCensoredName}
                            <TiNotes />
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <p><span>Collection:</span> {track.collectionCensoredName}</p>
                        <p><span>Track Count:</span> {track.trackCount}</p>
                        <p><span>Price:</span> {track.collectionPrice} {track.currency}</p>
                    </div>
                    <div className="col-md-4">
                        <p><span>Track Duration:</span> {trackDuration} min</p>
                        <p><span>Track Price:</span> {track.trackPrice} {track.currency}</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
            </div>
            
            );
        }

        return (
            <div onClick={this.props.selectTrack.bind(this, track)} className="container" style={style}>

                <div className="row">
                    <div className="col-sm-2">
                        <img src={track.artworkUrl60} alt={track.collectionCensoredName} />
                    </div>

                    <div className="col-sm-2">
                        {track.artistName}
                    </div>

                    <div className="col-sm-2">
                        {track.trackCensoredName}
                    </div>

                    <div className="col-sm-2">
                        {track.collectionCensoredName}
                    </div>

                    <div className="col-sm-2">
                        {track.primaryGenreName}
                    </div>

                    <div className="col-sm-2">
                        <TiPlus />
                    </div>
                </div>
            </div>
            
            );
    }
}

const style = {
    borderRadius: 4,
    textAlign: 'left',
    width: '100%',
    padding: 5,
}

const mapStateToProps = (state) => { 
    return { selectedTrack: state.selectedTrack };
  };

export default connect(mapStateToProps, { selectTrack })(TracksListItem);