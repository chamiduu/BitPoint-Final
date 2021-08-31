import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "500px",
    marginBottom: "50px",
    marginLeft: "50px",
    marginRight: "50px",

    background: "#edf3fc",
    color: "#171717",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    width: "50px",
    height: "50px",
  },

  OCContainer: {
    marginTop: "150px",
    marginRight: "50px",
  },

  button: {
    marginLeft: "10px",
    marginBottom: "10px",
    background: "#2b7cff",
    transition: "0.5s ease",
    "&:hover": {
      backgroundColor: "#236adb",
    },
    color: "#fff",
  },

  desc: {
    color: "#000"
  }
}));

export default function OC() {
  const classes = useStyles();

  return (
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
      <Card className={classes.root} elevation="6">
        <CardHeader
          title="BitPoint WhatsApp Group"
          subheader="You can join the BitPoint WhatsApp group and chat with other people and get help in if you need any"
          className={classes.desc}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Please be respectful to other members of the group and help each
            other.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            size="large"
            target="_blank"
            href="https://chat.whatsapp.com/H7mwjG6EMidKfu8fwuOnXN"
            className={classes.button}
            startIcon={<WhatsAppIcon />}
          >
            Join
          </Button>
        </CardActions>
      </Card>

    </Grid>
  );
}