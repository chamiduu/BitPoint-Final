import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Quotes() {
    const useStyles = makeStyles({
        quoteContainer: {
            padding: '80px',
            
        }
    });

    const classes = useStyles();
    return (
      <div>
        <div className={classes.quoteContainer}>
          <Typography align="left" variant="h4">
            {" "}
            <span style={{ color: "#001fff", fontSize: "50px" }}>“</span> I am
            always ready to learn although I do not always like being taught{" "}
            <span style={{ color: "#001fff", fontSize: "50px" }}>”</span>{" "}
          </Typography>
          <Typography align="left" variant="h6" style={{ marginLeft: "30px" }}>
            ~ Winston Churchill
          </Typography>
        </div>

        <div className={classes.quoteContainer}>
          <Typography align="right" variant="h4">
            {" "}
            <span style={{ color: "#001fff", fontSize: "50px" }}>“</span> I One
            learns from books and example only that certain things can be done.
            Actual learning requires that you do those things{" "}
            <span style={{ color: "#001fff", fontSize: "50px" }}>”</span>{" "}
          </Typography>
          <Typography
            align="right"
            variant="h6"
            style={{ marginRight: "30px" }}
          >
            ~ Frank Herbert
          </Typography>
        </div>

        <div className={classes.quoteContainer}>
          <Typography align="left" variant="h4">
            {" "}
            <span style={{ color: "#001fff", fontSize: "50px" }}>“</span>
            Study hard what interests you the most in the most undisciplined,
            irreverent and original manner possible{" "}
            <span style={{ color: "#001fff", fontSize: "50px" }}>”</span>{" "}
          </Typography>
          <Typography align="left" variant="h6" style={{ marginRight: "30px" }}>
            ~ Richard Feynman
          </Typography>
        </div>
      </div>
    );
}

export default Quotes
