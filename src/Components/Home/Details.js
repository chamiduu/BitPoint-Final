import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  title: {
    fontWeight: "bold",
    marginBottom: "50px"
  },

  details: {
    background: "#edf3fc",
  },

  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    justifyContent: "center"
  },
}));

export default function Details() {
  const classes = useStyles();

    return (
      <div className={classes.container} id="info">
        <div className={classes.root}>
          <Typography
            variant="h3"
            component="h3"
            align="center"
            className={classes.title}
          >
            What exactly is BitPoint
          </Typography>
          <Accordion defaultExpanded="true">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What is BitPoint
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography>
                BitPoint is a website which helps students to enhance their ICT
                skills through hand-picked great courses and tasks. BitPoint is
                available for students of all levels, anywhere and everywhere.
                You can learn many new things under the 3 categories of courses:
                Coding, Design and Explore. For example, if you want to learn
                web development and you don't know where to start, BitPoint will
                help you to find the right course in our "Courses" tab. You can
                also test yourself from the tasks in our "Tasks" tab.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Why BitPoint</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sometimes, it is hard for you to know what to do when starting
                to learn a new technology like 3D modelling or Android app
                development. Most of the time you can't learn it by yourself.
                You have to follow some tutorials. But how do you know its the
                right tutorial? That's when BitPoint comes to your rescue. You
                can learn many new things under the 3 categories of courses:
                Coding, Design and Explore. For example, if you want to learn
                web development and you don't know where to start, BitPoint will
                help you to find the right course in our "Courses" tab. There
                will be a great free course waiting for you. These courses are
                not made by us. They are made by international professionals.
                They are easy to follow and very interactive.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Why learn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Modern businesses rely heavily on computerised technology to
                efficiently complete vast amounts of tasks. Having decent
                computer skills means that you can perform the tasks that
                competing candidates may not be able to. This knowledge can
                result in you getting hired over your competitors. Universities
                acknowledge the importance of computer skills and some
                institutions require their students to complete a basic computer
                literacy course in their first year of study. Also the jobs in
                computer industry has increased significantly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                How to choose courses
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The truth is that there is no perfect educational program — when
                one student finds the course best suited and efficient, another
                one doesn’t take it seriously. It all depends on the goals and
                personal preference you set when starting to learn programming.
                So, how can you find the lesson that would meet your particular
                needs? BitPoint will help you to find the right course for you. If you need to learn a new programming language, you can find a beginner friendly course. You can choose courses in many different areas like graphic designing, web development, mobile app development, 3D designing, writing etc.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                How to test yourself with tasks
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you complete a course and you want to test yourself, you can find some well thought out tasks that you can complete with the knowledge you gained from your courses. You can do the task and submit it from the website. Then our mentors will review your task and get back to you within 24 hours. We will also correct you in the places you did wrong.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Contact mentors
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can get in touch with our mentors by going to the contact tab. We will get back to you within 24 hours. You can clear out any problems or issues you have by talking to us.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
}
