import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    // <h1>This is the portfolio page</h1>
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <a href="/">
            <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
              <HomeIcon />
            </IconButton>
            </a>
            <a href="/portfolio">
            <Button color="secondary">Portfolio</Button>
            </a>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Navbar