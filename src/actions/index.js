import { GET_TRACKS, SELECT_TRACK } from './types';

import axios from 'axios';

export function getTracks(searchTerm) {
    const term = searchTerm.split(' ').join('+');
    const url = `https://itunes.apple.com/search?term=${term}&limit=25`;
    const request = axios.get(url);
    return {
        type: GET_TRACKS,
        payload: request
    }
}

export function selectTrack(track) {
    return {
        type: SELECT_TRACK,
        payload: track
    }
}