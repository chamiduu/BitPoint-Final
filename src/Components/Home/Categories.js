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
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1018%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(243%2c 249%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c672.482C126.697%2c667.366%2c259.129%2c633.136%2c350.171%2c544.877C435.955%2c461.715%2c438.04%2c330.031%2c471.546%2c215.348C499.972%2c118.053%2c533.304%2c24.903%2c531.701%2c-76.447C529.919%2c-189.106%2c534.348%2c-313.944%2c461.81%2c-400.161C389.083%2c-486.603%2c260.009%2c-485.582%2c154.196%2c-525.142C38.53%2c-568.386%2c-75.303%2c-691.793%2c-188.935%2c-643.455C-306.157%2c-593.59%2c-274.44%2c-406.319%2c-355.717%2c-308.23C-434.058%2c-213.685%2c-624.18%2c-213.737%2c-645.236%2c-92.771C-666.089%2c27.029%2c-491.294%2c90.769%2c-444.722%2c203.098C-395.403%2c322.054%2c-457.399%2c480.431%2c-368.83%2c573.911C-279.495%2c668.2%2c-129.783%2c677.723%2c0%2c672.482' fill='%23daedff'%3e%3c/path%3e%3cpath d='M1440 1074.313C1550.125 1107.524 1684.595 1153.046 1777.888 1085.7640000000001 1871.978 1017.9069999999999 1844.203 870.7860000000001 1876.645 759.409 1903.613 666.826 1955.3139999999999 582.704 1952.495 486.31399999999996 1949.464 382.687 1933.37 269.332 1860.164 195.926 1787.941 123.505 1672.208 132.058 1573.286 106.06799999999998 1477.6779999999999 80.94900000000001 1384.723 21.04499999999996 1289.039 45.874000000000024 1192.641 70.88900000000001 1139.186 168.07999999999998 1067.58 237.296 988.0989999999999 314.124 854.355 364.341 845.576 474.53499999999997 836.696 585.998 955.352 662.704 1026.836 748.686 1080.95 813.774 1145.34 862.6600000000001 1211.82 915.0550000000001 1286.174 973.656 1349.361 1046.979 1440 1074.313' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1018'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,

        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
          marginTop: "80vh",
          height: "min-content",
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
                marginTop: "5%",
                paddingBottom: "50px",
                color: "#252525",
                fontWeight: "bold",
              }}
            >
              Learn what
              <span style={{ color: "#0363ff" }}> YOU LOVE</span>
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
