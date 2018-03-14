import { SELECT_TRACK } from "../actions/types";

const INITIAL_STATE = { selectedTrack: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SELECT_TRACK: {
            console.log(state);
          
            if(state.selectedTrack) {
                if(action.payload.trackId === state.selectedTrack.trackId) {
                    return {...state, selectedTrack: null}
                }
            }
            return {...state, selectedTrack: action.payload}
        }
        default: {
            return state;
        }
    }
}