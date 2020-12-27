import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2} data-testid='character-card'>
      <CardContent className={classes.details}>
        <Typography component='h6' variant='h6'>
          {character.name}
        </Typography>
        <Typography
          variant='caption'
          color='textSecondary'
          className={classes.location}
        >
          {character.location.name}
        </Typography>
        <Button
          data-testid='profile-button'
          size='small'
          component={Link}
          to={`/profile/${character.id}`}
        >
          Learn More
        </Button>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image={character.image}
        title={character.name}
      />
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  location: {
    flex: 1,
  },
  cover: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 6,
  },
}));
