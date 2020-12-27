import api from '../services/api';
import {
  SET_CHARACTERS_LOADING,
  SET_CHARACTERS,
  SET_PROFILE,
  SET_PROFILE_LOADING,
  SET_EPISODES_LOADING,
  SET_EPISODES,
  SET_LOCATION_LOADING,
  SET_LOCATION,
  SET_ORIGIN,
  SET_ORIGIN_LOADING,
} from './consts';

export const getCharacters = () => {
  return async (dispatch) => {
    dispatch(setCharactersLoading(true));
    const apiData = await api.get('character/');
    const characters = apiData.data.results;
    dispatch(setCharacters(characters));
  };
};

export const setCharactersLoading = (payload) => ({
  type: SET_CHARACTERS_LOADING,
  payload: payload,
});

export const setCharacters = (charachters) => ({
  type: SET_CHARACTERS,
  payload: charachters,
});

export const getProfile = (id) => {
  return async (dispatch) => {
    dispatch(setProfileLoading(true));
    const apiData = await api.get(`character/${id}`);
    const profile = apiData.data;
    dispatch(setProfile(profile));
  };
};

export const setProfileLoading = (payload) => ({
  type: SET_PROFILE_LOADING,
  payload: payload,
});

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile,
});

export const getEpisodes = (episodes) => {
  return async (dispatch) => {
    dispatch(setEpisodeLoading(true));
    console.log(
      `episode/${episodes.map((episode) => episode.split('episode/')[1])}`,
    );
    const apiData = await api.get(
      `episode/${episodes.map((episode) => episode.split('episode/')[1])}`,
    );
    if (Array.isArray(apiData.data)) {
      const episodesList = apiData.data;
      dispatch(setEpisodes(episodesList));
    } else {
      const episodesList = apiData.data;
      dispatch(setEpisodes([episodesList]));
    }
  };
};

export const setEpisodeLoading = (payload) => ({
  type: SET_EPISODES_LOADING,
  payload: payload,
});

export const setEpisodes = (episodes) => ({
  type: SET_EPISODES,
  payload: episodes,
});

export const getLocation = (locationURL) => {
  return async (dispatch) => {
    dispatch(setLocationLoading(true));
    const apiData = await api.get(
      `location/${locationURL.split('location/')[1]}`,
    );
    const location = apiData.data;
    dispatch(setLocation(location));
  };
};

export const setLocationLoading = (payload) => ({
  type: SET_LOCATION_LOADING,
  payload: payload,
});

export const setLocation = (profile) => ({
  type: SET_LOCATION,
  payload: profile,
});

export const getOrigin = (locationURL) => {
  return async (dispatch) => {
    dispatch(setOriginLoading(true));
    const apiData = await api.get(
      `location/${locationURL.split('location/')[1]}`,
    );
    const charachters = apiData.data;
    dispatch(setOrigin(charachters));
  };
};

export const setOriginLoading = (payload) => ({
  type: SET_ORIGIN_LOADING,
  payload: payload,
});

export const setOrigin = (profile) => ({
  type: SET_ORIGIN,
  payload: profile,
});
