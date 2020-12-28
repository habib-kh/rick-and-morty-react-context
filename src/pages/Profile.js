import React, { useEffect } from 'react';
import _ from 'underscore';

import { Layout, CharachterProfile } from '../components';
import { getProfile, useProfile } from '../context/profileContext';
import { getEpisodes, useEpisode } from '../context/episodeContext';
import { useLocation } from 'react-router-dom';
import { getLocation } from '../store/actions';

export default function Profile({
  match: {
    params: { id },
  },
}) {
  const [profileState, profileDispatch] = useProfile();
  const { profile, loading: profileLoading } = profileState;
  const [episodeState, episodeDispatch] = useEpisode();
  const { episodes, loading: episodeLoading } = episodeState;
  const [locationState, locationDispatch] = useLocation();
  const { location, loading: locationLoading } = locationState;

  useEffect(() => {
    getProfile(profileDispatch, id);
  }, []);

  //get location and origin of profile
  useEffect(() => {
    if (!_.isEmpty(profile)) {
      getEpisodes(episodeDispatch, profile.episode);
      if (profile.location.url) {
        getLocation(locationDispatch, profile.location.url);
      }
    }
  }, [profile]);

  return (
    <Layout
      page='profile-page'
      title={profile?.name}
      desc={profile?.location?.name}
      loading={profileLoading || locationLoading || episodeLoading}
    >
      <CharachterProfile
        profile={profile}
        episodes={episodes}
        location={location}
      />
    </Layout>
  );
}
