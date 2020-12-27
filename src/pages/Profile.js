import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'underscore';
import {
  getEpisodes,
  getLocation,
  getOrigin,
  getProfile,
} from '../store/actions';
import { Layout, CharachterProfile } from '../components';

export default function Profile({
  match: {
    params: { id },
  },
}) {
  const loading = useSelector((state) => state.profile.loading);
  const episodesLoading = useSelector((state) => state.episodes.loading);
  const originLoading = useSelector((state) => state.origin.loading);
  const locationLoading = useSelector((state) => state.location.loading);

  const profile = useSelector((state) => state.profile.profile);
  const episodes = useSelector((state) => state.episodes.episodes);
  const location = useSelector((state) => state.location.location);
  const origin = useSelector((state) => state.origin.origin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(id));
  }, []);

  //get location and origin of profile
  useEffect(() => {
    if (!_.isEmpty(profile)) {
      dispatch(getEpisodes(profile.episode));

      if (profile.location.url) {
        dispatch(getLocation(profile.location.url));
      }

      if (profile.origin.url) {
        dispatch(getOrigin(profile.origin.url));
      }
    }
  }, [profile]);

  return (
    <Layout
      page='profile-page'
      title={profile?.name}
      desc={profile?.location?.name}
      loading={loading || originLoading || locationLoading || episodesLoading}
    >
      <CharachterProfile
        profile={profile}
        episodes={episodes}
        location={location}
        origin={origin}
      />
    </Layout>
  );
}
