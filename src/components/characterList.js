import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CharacterCard from './characterCard';

export default function CharacterList({ characters }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid>
      {/** Pagination **/}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    gridTemplateColumns: '1fr 1fr 1fr',
    display: 'grid',
    gridGap: 16,
  },
}));
