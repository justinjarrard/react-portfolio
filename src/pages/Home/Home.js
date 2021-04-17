import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  base: {
    maxWidth: 345,
  },
  media: {
    height: 400,
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <img className="image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.LbV5FXfnXXBDZs4Oq5g0jAHaEK%26pid%3DApi&f=1" alt=""/>
            </Paper>
          </Grid>
          <Grid item xs={6} container justify='center'>
            <Paper className={classes.paper}>
              <Card className={classes.base}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://secure.meetupstatic.com/photos/member/4/6/3/6/member_302297974.jpeg"
                    title="Justin Jarrard"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      I am Justin Jarrard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      I am a fun loving guy who is falling in love with web development. I still love golf, travel, and playing the drums too though ;). 
          </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6} container justify='center'>
            <Paper className={classes.paper}>
              <Card className={classes.base}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3iDO9sQjwvLsHSg4L_BFywHaGf%26pid%3DApi&f=1"
                    title="Picture of a Buffalo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Stay Tuned
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Soon I will have an collection of my photography here for your viewing pleasure.
          </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          
          {/* <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid> */}
        </Grid>
      </div>
    </>
  )
}

export default Home