import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Typography } from "@material-ui/core";
import { GitHub, Instagram, Phone } from "@material-ui/icons";
import theme from "../../theme";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(() => ({
  fContainer: {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1018%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(243%2c 249%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c672.482C126.697%2c667.366%2c259.129%2c633.136%2c350.171%2c544.877C435.955%2c461.715%2c438.04%2c330.031%2c471.546%2c215.348C499.972%2c118.053%2c533.304%2c24.903%2c531.701%2c-76.447C529.919%2c-189.106%2c534.348%2c-313.944%2c461.81%2c-400.161C389.083%2c-486.603%2c260.009%2c-485.582%2c154.196%2c-525.142C38.53%2c-568.386%2c-75.303%2c-691.793%2c-188.935%2c-643.455C-306.157%2c-593.59%2c-274.44%2c-406.319%2c-355.717%2c-308.23C-434.058%2c-213.685%2c-624.18%2c-213.737%2c-645.236%2c-92.771C-666.089%2c27.029%2c-491.294%2c90.769%2c-444.722%2c203.098C-395.403%2c322.054%2c-457.399%2c480.431%2c-368.83%2c573.911C-279.495%2c668.2%2c-129.783%2c677.723%2c0%2c672.482' fill='%23daedff'%3e%3c/path%3e%3cpath d='M1440 1074.313C1550.125 1107.524 1684.595 1153.046 1777.888 1085.7640000000001 1871.978 1017.9069999999999 1844.203 870.7860000000001 1876.645 759.409 1903.613 666.826 1955.3139999999999 582.704 1952.495 486.31399999999996 1949.464 382.687 1933.37 269.332 1860.164 195.926 1787.941 123.505 1672.208 132.058 1573.286 106.06799999999998 1477.6779999999999 80.94900000000001 1384.723 21.04499999999996 1289.039 45.874000000000024 1192.641 70.88900000000001 1139.186 168.07999999999998 1067.58 237.296 988.0989999999999 314.124 854.355 364.341 845.576 474.53499999999997 836.696 585.998 955.352 662.704 1026.836 748.686 1080.95 813.774 1145.34 862.6600000000001 1211.82 915.0550000000001 1286.174 973.656 1349.361 1046.979 1440 1074.313' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1018'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,

    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100vh",
    margin: "auto",
        display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "80vh",
      height: "min-content",
    },
  },
  root: {
    width: "350px",
    height: "min-content",
    marginBottom: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fcff",
    color: theme.palette.primary.contrastText,
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },

  avatar: {
    width: "50px",
    height: "50px",
  },

  OCContainer: {
    marginTop: "50px",

    height: "min-content"
  },
  icons: {
    color: "#2b7cff",
  },

  OClist: {
    marginTop: "50px",
    },
  
    fTitle: {
        marginTop: "10vw",
        fontWeight: "bold"
  },
    
  image: {
    width: "100px",
  },
  features: {
    width: "80%",
    textAlign: "center",
  }
}));

export default function Features() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);

  return (
    <div className={classes.fContainer}>
      <Typography variant="h3" color="secondary" className={classes.fTitle}>
        Features
      </Typography>
      <Grid
        xl={12}
        md={12}
        lg={12}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.OCContainer}
      >
        <Card className={classes.root} elevation="6" data-aos="zoom-in-up">
          <img
            src="https://img.icons8.com/color/96/000000/e-learning.png"
            className={classes.image}
          />
          <CardHeader
            title="Hand-picked Courses"
            subheader="We are very experienced in the area of learning and teaching computer related subjects. Hence we can help you with the best possible lessons for you."
            className={classes.features}
          />
        </Card>

        <Card className={classes.root} elevation="6" data-aos="zoom-in-up">
          <img
            src="https://img.icons8.com/color/96/000000/coach-.png"
            className={classes.image}
          />
          <CardHeader
            title="Mentoring"
            subheader="You can get in touch with our mentors by going to the contact tab. We will get back to you within 24 hours. You can clear out any problems or issues you have by talking to us."
            className={classes.features}
          />
        </Card>

        <Card className={classes.root} elevation="6" data-aos="zoom-in-up">
          <img
            src="https://img.icons8.com/color/96/000000/neighbour.png"
            className={classes.image}
          />
          <CardHeader
            title="Great Community"
            subheader="The small but growing community of BitPoint can help each other and share knowledge."
            className={classes.features}
          />
        </Card>
      </Grid>
    </div>
  );
}
