import { CheckCircleOutline } from "@mui/icons-material";
import { Alert, Box, Button, Paper, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

function Item(props) {
  const { currentPos, experience, education } = props.item;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Sent Interview to Candidate"
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Interview Sent to Candidate
        </Alert>
      </Snackbar>
      <Paper style={{ padding: 80 }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {currentPos}
        </Typography>
        <Box mb={2} />
        <Typography variant="h6" style={{ textDecoration: "underline" }}>
          Experience
        </Typography>
        <Box mb={2} />
        <ul>
          {experience.map((e) => (
            <li>
              <Typography variant="body1">{e}</Typography>
            </li>
          ))}
        </ul>
        <Box mb={2} />
        <Typography variant="h6" style={{ textDecoration: "underline" }}>
          Education
        </Typography>
        <Box mb={2} />
        <ul>
          <li>
            <Typography variant="body1">{education}</Typography>
          </li>
        </ul>
        <Box mb={4} />
        <Button
          variant="contained"
          style={{ float: "right" }}
          onClick={() => setOpen(true)}
        >
          Select for interview
          {<CheckCircleOutline />}
        </Button>
      </Paper>
    </>
  );
}
const Recruiter = () => {
  var items = [
    {
      currentPos: "Software Developer @ SAP",
      experience: [
        "Developed and maintained enterprise-level software applications using SAP's ABAP programming language.",
        "Worked on multiple projects, including designing and implementing new features, optimizing performance, and troubleshooting issues.",
        "Collaborated with cross-functional teams, including product owners, architects, quality assurance engineers, and other developers to deliver high-quality software on time.",
        "Participated in the entire software development life cycle, from requirement gathering and analysis to deployment and post-deployment support.",
        "Demonstrated expertise in core SAP technologies, such as SAP NetWeaver, SAP Business Suite, and SAP HANA.",
        "Used various development tools and methodologies, such as Agile, Scrum, and Waterfall, to deliver high-quality software solutions.",
      ],
      education: "Bachelor of Computer Science - University of Waterloo",
    },
    {
      currentPos: "Research Assistant @ University of Waterloo",
      experience: [
        "Developed and maintained enterprise-level software applications using SAP's ABAP programming language.",
        "Worked on multiple projects, including designing and implementing new features, optimizing performance, and troubleshooting issues.",
        "Collaborated with cross-functional teams, including product owners, architects, quality assurance engineers, and other developers to deliver high-quality software on time.",
        "Participated in the entire software development life cycle, from requirement gathering and analysis to deployment and post-deployment support.",
        "Demonstrated expertise in core SAP technologies, such as SAP NetWeaver, SAP Business Suite, and SAP HANA.",
        "Used various development tools and methodologies, such as Agile, Scrum, and Waterfall, to deliver high-quality software solutions.",
      ],
      education: "Masters Degree, Data Analysis - University of Toronto",
    },
    {
      currentPos: "Software Engineering Manager @ Microsoft",
      experience: [
        "Developed and maintained enterprise-level software applications using SAP's ABAP programming language.",
        "Worked on multiple projects, including designing and implementing new features, optimizing performance, and troubleshooting issues.",
        "Collaborated with cross-functional teams, including product owners, architects, quality assurance engineers, and other developers to deliver high-quality software on time.",
        "Participated in the entire software development life cycle, from requirement gathering and analysis to deployment and post-deployment support.",
        "Demonstrated expertise in core SAP technologies, such as SAP NetWeaver, SAP Business Suite, and SAP HANA.",
        "Used various development tools and methodologies, such as Agile, Scrum, and Waterfall, to deliver high-quality software solutions.",
      ],
      education:
        "Masters Degree, Computer Engineering (Management Specialization) - McGill University",
    },
    {
      currentPos: "Product Manager @ LinkedIn",
      experience: [
        "Developed and maintained enterprise-level software applications using SAP's ABAP programming language.",
        "Worked on multiple projects, including designing and implementing new features, optimizing performance, and troubleshooting issues.",
        "Collaborated with cross-functional teams, including product owners, architects, quality assurance engineers, and other developers to deliver high-quality software on time.",
        "Participated in the entire software development life cycle, from requirement gathering and analysis to deployment and post-deployment support.",
        "Demonstrated expertise in core SAP technologies, such as SAP NetWeaver, SAP Business Suite, and SAP HANA.",
        "Used various development tools and methodologies, such as Agile, Scrum, and Waterfall, to deliver high-quality software solutions.",
      ],
      education:
        "Bachelors Degree, Computational Bioinformatics - University of Illinois",
    },
    {
      currentPos: "Analyst @ Government of Canada",
      experience: [
        "Developed and maintained enterprise-level software applications using SAP's ABAP programming language.",
        "Worked on multiple projects, including designing and implementing new features, optimizing performance, and troubleshooting issues.",
        "Collaborated with cross-functional teams, including product owners, architects, quality assurance engineers, and other developers to deliver high-quality software on time.",
        "Participated in the entire software development life cycle, from requirement gathering and analysis to deployment and post-deployment support.",
        "Demonstrated expertise in core SAP technologies, such as SAP NetWeaver, SAP Business Suite, and SAP HANA.",
        "Used various development tools and methodologies, such as Agile, Scrum, and Waterfall, to deliver high-quality software solutions.",
      ],
      education: "Bachelors Degree, Statistics - University of Waterloo",
    },
  ];
  return (
    <Box sx={{ margin: "0 auto", maxWidth: "1000px", marginTop: 3 }}>
      <Typography variant="h4">Candidate Search</Typography>
      <Typography variant="subtitle1">
        Search through the following resumes, and choose who to send an
        interview to.
      </Typography>
      <Box mt={2} />
      <Carousel navButtonsAlwaysVisible autoPlay={false} animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Recruiter;
