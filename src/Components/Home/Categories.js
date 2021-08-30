import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function Categories() {
    const useStyles = makeStyles({
      catContainer: {
        
        maxWidth: "1400px",
        margin: "auto",
        [theme.breakpoints.down("xs")]: {
          marginTop: "10vh",
        },
      },

      root: {
        maxWidth: 325,
        height: "400px",
        marginBottom: "50px",
        marginLeft: "50px",
        marginRight: "50px",
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1013%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(251%2c 253%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c275 C 57.6%2c232.2 172.8%2c77 288%2c61 C 403.2%2c45 460.8%2c186 576%2c195 C 691.2%2c204 748.8%2c106.2 864%2c106 C 979.2%2c105.8 1036.8%2c199 1152%2c194 C 1267.2%2c189 1382.4%2c103.6 1440%2c81L1440 560L0 560z' fill='rgba(152%2c 194%2c 239%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c433 C 41.2%2c416.8 123.6%2c343.4 206%2c352 C 288.4%2c360.6 329.6%2c469.4 412%2c476 C 494.4%2c482.6 535.6%2c390.6 618%2c385 C 700.4%2c379.4 741.6%2c447 824%2c448 C 906.4%2c449 947.6%2c395.2 1030%2c390 C 1112.4%2c384.8 1154%2c416.6 1236%2c422 C 1318%2c427.4 1399.2%2c418 1440%2c417L1440 560L0 560z' fill='rgba(41%2c 141%2c 249%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1013'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundAttachment: "inherit",
        backgroundSize: "cover",
        color: "#000",
        borderRadius: "15px",
        transformOrigin: "center center 0px",
        transition: "all .5s ease-out",
        animationName: "animate",
        animationDuration: "3s",
        animationIterationCount: "infinite",
        transform:
          "perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg)",
        zIndex: "1",
        "&:hover": {
          animation: "unset",
          marginTop: "1vh",
          transform:
            "perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
        },

        [theme.breakpoints.down("xs")]: {
          marginLeft: "10px",
          marginRight: "10px",
          width: "300px",
          transformOrigin: "none",
          transition: "none",
          animationName: "animate",
          animationDuration: "none",
          animationIterationCount: "none",
          transform: "none",
          marginBottom: "-100px",
          zIndex: "1",
          "&:hover": {
            animation: "none",
            marginTop: "0",
            transform: "none",
          },
        },
      },

      subContent: {
        height: "230px",
        position: "relative",
        width: "320px",
        margin: "auto",
      },
      subText: {
        position: "absolute",
        bottom: "0",
        width: "250px",
      },

      cont: {
        height: "600px",
        marginBottom: "-100px",
      },
    });

      const classes = useStyles();
    return (
      <div className={classes.catContainer}>
        <Grid
          xl={12}
          md={12}
          lg={12}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.categoryCard}
        >
          <Grid Item xl={12} lg={12}>
            <Typography
              variant="h2"
              align="center"
              style={{
                marginTop: "25%",
                paddingBottom: "50px",
                color: "#79bbff",
              }}
            >
              Learn what
              <span style={{ color: "#fff" }}> YOU LOVE</span>
            </Typography>
          </Grid>
          <Grid item className={classes.cont}>
            <Card className={classes.root} elevation="3">
              <CardHeader
                title="CODE"
                subheader="/kəʊd/"
                titleTypographyProps={{ variant: "h3", color: "secondary" }}
              />
              <CardContent className={classes.subContent}>
                <Typography variant="h6" className={classes.subText}>
                  Learn to talk to you computer and make amazing websites,
                  games, apps and many more that everyone can use by the power
                  of programming
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.cont}>
            <Card className={classes.root} elevation="3">
              <CardHeader
                title="Design"
                subheader="/dɪˈzʌɪn/"
                titleTypographyProps={{ variant: "h3", color: "secondary" }}
              />
              <CardContent className={classes.subContent}>
                <Typography variant="h6" className={classes.subText}>
                  Be creative and create mesmerizing digital art, vector
                  graphics, 3D models, animations, videos and much more
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item className={classes.cont}>
            <Card className={classes.root} elevation="3">
              <CardHeader
                title="Explore"
                subheader="/ɪkˈsplɔː,ɛkˈsplɔ:/"
                titleTypographyProps={{ variant: "h3", color: "secondary" }}
              />
              <CardContent className={classes.subContent}>
                <Typography variant="h6" className={classes.subText}>
                  Dive into the world of ICT and explore many things to write
                  your own articles and blogs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
}

export default Categories
