import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  content: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Layout({
  title,
  desc,
  children,
  maxWidth,
  loading,
  page,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography data-testid={page} variant='h6' color='inherit' noWrap>
            Rick & Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          {loading && <CircularProgress />}
          {!loading && (
            <Container maxWidth='sm'>
              <Typography
                component='h1'
                variant='h2'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                {title}
              </Typography>
              <Typography
                variant='h5'
                align='center'
                color='textSecondary'
                paragraph
              >
                {desc}
              </Typography>
            </Container>
          )}
        </div>
        <Container className={classes.content} maxWidth={maxWidth}>
          {loading ? <CircularProgress /> : children}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Rick & Morty
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Front-End Developed By: Habib Khademhosseini
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          Rick & Morty {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    </React.Fragment>
  );
}

Layout.defaultProps = {
  maxWidth: 'lg',
};
