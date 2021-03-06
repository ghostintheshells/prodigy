export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const REQUEST_ALL_TRACKS = 'REQUEST_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REQUEST_TRACK = 'REQUEST_TRACK';
export const CREATE_TRACK = 'CREATE_TRACK';
export const REQUEST_YOUTUBE_URL = 'REQUEST_YOUTUBE_URL';
export const RECEIVE_YOUTUBE_URL = 'RECEIVE_YOUTUBE_URL';

export const requestAllTracks = () => ({
  type: REQUEST_ALL_TRACKS
});

export const requestTrack = (track_id) => ({
  type: REQUEST_TRACK,
  track_id
});

export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const createTrack = (track, callback) => ({
  type: CREATE_TRACK,
  track,
  callback
});

export const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const requestYoutubeUrl = (querry, success, error) => ({
  type: REQUEST_YOUTUBE_URL,
  success,
  error,
  querry
});
