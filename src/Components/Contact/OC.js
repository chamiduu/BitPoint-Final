import React, { useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';
import { GitHub, Instagram, Phone } from '@material-ui/icons';
import theme from '../../theme'
import OCdata from '../../Data/OC.json'
import Aos from 'aos';
import "aos/dist/aos.css"

const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    height: "150px",
    marginBottom: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    background: "#edf3fc",
    color: theme.palette.primary.contrastText,
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  OClistItem: {
    width: 345,
    height: "50px",
    marginBottom: "10px",
    marginLeft: "50px",
    padding: "10px",
    marginRight: "50px",
    background: "linear-gradient(144deg, #275d8ccf, #21466766)",
    backdropFilter: "blur(10px)",
    color: theme.palette.primary.contrastText,
    borderRadius: "10px",
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
    marginRight: "50px",
  },
  icons: {
    color: "#2b7cff",
  },

  OClist: {
    marginTop: "50px",
  },
}));

export default function OC() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration:200 })
  }, [])

  return (
    <div className="padding-bottom-100">
    <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.OCContainer}>
      <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Chamindu Jayanath" 
        subheader= "Coding expert | Web Developer"
      />
      <CardActions disableSpacing >
       <IconButton className={classes.icons} aria-label="GitHub" href="https://github.com/chamindujs" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/1yweij" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Manula Thejan" 
        subheader= "Design Expert"
      />
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/hqa8o0" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>


    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Gothira Mendis" 
        subheader= "Documentation expert"
      />
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="Instagram" href="https://www.instagram.com/mendi.iiii/" target="_blank">
          <Instagram />
        </IconButton> 
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/6uw5ab" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    </Grid>
    
    </div>
    
  );
}
