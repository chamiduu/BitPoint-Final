import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core'; 
import theme from '../../theme'  
import {ReactComponent as Logo} from '../../Img/hero.svg';


export default function Header() {
    const useStyles = makeStyles({
      headerContainer: {
        width: "95%",
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          marginTop: "4%",
        },
        [theme.breakpoints.down("xs")]: {
          marginTop: "0",
        },
      },

      hero: {
        padding: "40px",
        paddingTop: "170px",
      },
      svg: {
        display: "flex",
        marginTop: "100px",
        flexDirection: "column",
        alignItems: "flex-end",
        [theme.breakpoints.down("lg")]: {
          alignItems: "center",
          marginTop: "0px",
        },
      },
      logo: {
        [theme.breakpoints.down("lg")]: {
          width: "100%",
          height: "auto",
        },
      },

      buttonI: {
        color: "#fff",
        border: "1px solid #fff",
        "&:hover": {
          color: "#fff",
          border: "1px solid #fff",
        },
      },

      buttonII: {
        backgroundColor: "#eaeeff",
        color: "#0363ff",
        "&:hover": {
          backgroundColor: "#eaeeff",
          color: "#0363ff",
        },
      },
    });
    const classes = useStyles();

    const endDate = new Date('2021-08-01')
  endDate.setHours(endDate.getHours() - 5)
  endDate.setMinutes(endDate.getMinutes() - 28)

  

    return (
      <div>
        <Grid container className={classes.headerContainer}>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className={classes.hero}
          >
            <Typography
              variant="h2"
              gutterBottom="true"
              align="left"
              style={{ marginBottom: "50px", fontWeight: "bold" }}
            >
              BITS 2021
            </Typography>

            <Typography
              variant="h5"
              align="left"
              style={{ marginBottom: "50px", color: "#91b8ff" }}
            >
              <span style={{ color: "#fff" }}>
                The First-Ever Task-Based Intra-School ICT competition,
              </span>{" "}
              organized by the Ananda College ICT Society to provide a platform
              for our school's students to polish and improve their ICT
              knowledge in many fields of ICT
            </Typography>
            <Button
              className={classes.buttonI}
              variant="outlined"
              target="_blank"
              color="secondary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfJIXV6-3WYIpqv92mHcVcDfZpBnWPEizbTOJ18g61oOSL8gA/viewform"
            >
              Register Now
            </Button>
            <Button
              className={classes.buttonII}
              variant="contained"
              href="#catt"
              color="secondary"
              style={{ marginLeft: "20px" }}
            >
              More Info
            </Button>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className={classes.svg}
          >
            <div className={classes.svgContainer}>
              <Logo className={classes.logo} />
            </div>
          </Grid>
        </Grid>
      </div>
    );
}
