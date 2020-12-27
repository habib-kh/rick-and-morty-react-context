import React from 'react';
import { Grid } from '@material-ui/core';

export default function CharachterProfile({
  profile,
  episodes,
  location,
  origin,
}) {
  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justify='center'
      alignItems='flex-start'
    >
      <Grid item container alignItems='center' justify='center' sm={12} md={6}>
        <img alt={profile?.name} src={profile?.image}></img>
      </Grid>
      <Grid item sm={12} md={6}>
        <ul>
          <li>
            <strong>Name:</strong> {profile?.name}
          </li>
          <li>
            <strong>Gender:</strong> {profile?.gender}
          </li>
          <li>
            <strong>Species:</strong> {profile?.species}
          </li>
          <li>
            <strong>Status:</strong> {profile?.status}
          </li>
          <li>
            <strong>Location:</strong>
            <ul>
              <li>name: {location.name}</li>
              <li>type: {location.type}</li>
              <li>dimension: {location.dimensions}</li>
              <li>amount of residents: {location.residents.length}</li>
            </ul>
          </li>
          <li>
            <strong>origin:</strong>
            <ul>
              <li>name: {origin.name}</li>
              <li>type: {origin.type}</li>
              <li>dimension: {origin.dimensions}</li>
              <li>amount of residents: {origin.residents.length}</li>
            </ul>
          </li>
          <li>
            <strong>Episodes:</strong>
            <ol>
              {episodes.map((episode) => (
                <li data-testid='episode' key={episode.id}>
                  {episode.name}
                </li>
              ))}
            </ol>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}
