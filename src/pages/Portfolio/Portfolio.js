import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';


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
  cardGrid: {
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
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

// const cards = [1, 2, 3];

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });



const Portfolio = () => {
  const classes = useStyles();
  return (
    // <h1>This is the portfolio page</h1>
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Portfolio
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here are some of my favorite applications build to date.  Please continue to check back to see for other fun and exciting projects in the works as we speak. 
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hsYfGniyuzFZYxaPdYKp-AHaF6%26pid%3DApi&f=1"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    BeWell
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A simple application that helps you track your weight training journey as well as find delicious and healthy meals to create based on the items of your choosing.
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href="https://ohskie3.github.io/Project-1/">
                <Button size="small" color="primary">
                  BeWell
        </Button>
        </a>
              </CardActions>
            </Card>
            
          </Grid>
          <Grid container spacing={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gSS_vcup8YEGkwa7AS3vXQHaEK%26pid%3DApi&f=1"
                  title="The Weekender"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Weeekender
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    An awesome application that connects users with like minded users who need fun and exciting things to do over the weekend. 
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href="https://thawing-sands-64181.herokuapp.com/">
                <Button size="small" color="primary">
                  The Weekender
        </Button>
                </a>
              </CardActions>
            </Card>

          </Grid>
          <Grid container spacing={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5hbBFY2yySJEZC_X8YlerwHaFj%26pid%3DApi&f=1"
                  title="Bird Book"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bird Book
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A Social Media Application that connects Birders with other bird enthusiasts with one another. 
          </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href="">
                <Button size="small" color="primary">
                  BirdBook(coming soon)
        </Button>
                </a>
              </CardActions>
            </Card>

          </Grid>
        </Container>
      </main>
      
    </>
  )
}

export default Portfolio