import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import CodeIcon from "@material-ui/icons/Code";
import BrushIcon from "@material-ui/icons/Brush";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import taskDetails from "../../Data/onlineTest.json";
import theme from "../../theme";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    transition: "all 0.3s ease",
    width: "835px",
    minHeight: "230px",
    marginLeft: "100px",
    marginTop: "20px",
    background: "#edf3fc",
    color: "#000",
    borderRadius: "15px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "600px",
      margin: "auto",
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "90%",
      margin: "auto",
      marginTop: "20px",
      height: "max-content",
      flexDirection: "column",
    },
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  content: {
    flex: "1 0 auto",
    marginRight: "-20px",
    width: "545px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "90%",
      margin: "auto",
    },
  },
  img: {
    width: "250px",
    height: "250px",
    alignSelf: "center",
    marginLeft: "20px",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "90%",
      margin: "auto",
      marginTop: "20px",
      borderRadius: "15px",
    },
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  button: {
    marginLeft: "10px",
    marginBottom: "10px",
    backgroundColor: "#2b7cff",
    color: "#fff",
    transition: "0.5s ease",
    "&:hover": {
      backgroundColor: "#236adb",
    },
  },

  cat: {
    color: "#151515",
  },

  catIcon: {
    color: "#2b7cff",
  },

  catogery: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    [theme.breakpoints.down("xs")]: {
      bottom: "0"
    },
  },
  filter: {
    background: "#fff",
    color: "#000",
    float: "right",
    marginRight: "10%",
    padding: "50px",
    borderRadius: "15px",
    width: "20%",
    position: "sticky",
    right: "0",
    top: "100px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "500px",
      margin: "auto",
      marginLeft: "100px",
      marginBottom: "20px",
      float: "none",
      top: "0",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "500px",
      margin: "auto",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "65%",
      margin: "auto",
      marginBottom: "20px",
    },
  },

  filterOptions: {
    color: "#151515",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  },
  codeIcon: {
    color: "#0363ff",
  },
  brushIcon: {
    color: "#0363ff",
  },
  exploreIcon: {
    color: "#0363ff",
  },
}));

export default function TaskCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState("All");
  const [data, setData] = useState(taskDetails);

  //search for article name 




  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    let result = taskDetails;
    setData(
      result.filter(function (obj, index) {
        return obj.catogery === event.target.value;
      })
    );
    if (event.target.value === "All") {
      setData(taskDetails);
    }
  };

  //search blog items
  

  return (
    <div className="eee">
      <div className={classes.filter}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ color: "black" }}>
            Filter Tasks
          </FormLabel>
          <RadioGroup
            className={classes.filterOptions}
            aria-label="tasks"
            name="filter"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="All"
              control={<Radio color="secondary" />}
              label="All Tasks"
            />
            <FormControlLabel
              value="Code"
              control={<Radio color="secondary" />}
              label="Coding"
            />
            <FormControlLabel
              value="Design"
              control={<Radio color="secondary" />}
              label="Design"
            />
            <FormControlLabel
              value="Explore"
              control={<Radio color="secondary" />}
              label="Explore"
            />
          </RadioGroup>
        </FormControl>
      </div>
      {data.map((course, index) => (
        <Card className={classes.root} color="primary" key={index}>
          <img
            className={classes.img}
            src={course.img}
            alt="loading..."
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {course.taskName}
                <span className={classes.catogery}>
                  <Tooltip title={course.catogery}>
                    <IconButton
                      aria-label={course.catogery}
                      className={classes.catIcon}
                    >
                      {(() => {
                        // eslint-disable-next-line
                        switch (course.catogery) {
                          case "Code":
                            return <CodeIcon className={classes.codeIcon} />;
                          case "Design":
                            return <BrushIcon className={classes.brushIcon} />;
                          case "Explore":
                            return (
                              <FindInPageIcon className={classes.exploreIcon} />
                            );
                        }
                      })()}
                    </IconButton>
                  </Tooltip>
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.cat}
              >
                {course.shortDescription}
              </Typography>
              <hr color="#16548a"></hr>
              <Typography variant="caption">Task ID: {course.id}</Typography>
            </CardContent>

            <div className={classes.controls}>
              <Button
                variant="contained"
                target="_blank"
                href={course.submit}
                className={classes.button}
              >
                View Course
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
