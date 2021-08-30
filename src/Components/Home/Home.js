import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import Categories from './Categories'
import Quotes from './Quotes'
import Details from './Details';
import Features from './Features';


function Home() {
    const useStyles = makeStyles({
        homeContainer: {
          
        },
        cats:{
          marginTop: '0px'
        }
    });
      const classes = useStyles();
    return (
      <div className={classes.homeContainer}>
        <Header />
        <Features />
        <Details />
        <div id="catt" className={classes.cats}>
          <Categories />
        </div>
        <Quotes />
      </div>
    );
}


export default Home
