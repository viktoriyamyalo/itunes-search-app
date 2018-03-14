import { GET_TRACKS } from "../actions/types";

const INITIAL_STATE =  { tracks: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        
        case GET_TRACKS: {
            
            return {...state, tracks: action.payload}
        }

        default: {
            return state;
        }
    }
}

