import { Box, Button, Paper, Typography } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import { useHistory } from "react-router-dom";
import { colMap } from "./constants/colMap";

const companies = [
  {
    name: "Microsoft",
    gender: [
      { title: "Male", value: 60 },
      { title: "Female", value: 30 },
      { title: "Non-binary", value: 10 },
    ],
    race: [
      { title: "White", value: 35 },
      { title: "Black", value: 20 },
      { title: "Asian", value: 25 },
      { title: "Other", value: 20 },
    ],
    religion: [
      { title: "Christian", value: 20 },
      { title: "Jewish", value: 11 },
      { title: "Buddhist", value: 10 },
      { title: "Muslim", value: 15 },
      { title: "Sikh", value: 13 },
      { title: "Hindu", value: 5 },
    ],
  },
  {
    name: "Google",
    gender: [
      { title: "Male", value: 75 },
      { title: "Female", value: 20 },
      { title: "Non-binary", value: 5 },
    ],
    race: [
      { title: "White", value: 55 },
      { title: "Black", value: 5 },
      { title: "Asian", value: 25 },
      { title: "Other", value: 15 },
    ],
    religion: [
      { title: "Christian", value: 12 },
      { title: "Jewish", value: 3 },
      { title: "Buddhist", value: 2 },
      { title: "Muslim", value: 4 },
      { title: "Sikh", value: 8 },
      { title: "Hindu", value: 1 },
    ],
  },
  {
    name: "Apple",
    gender: [
      { title: "Male", value: 12 },
      { title: "Female", value: 10 },
      { title: "Non-binary", value: 5 },
    ],
    race: [
      { title: "White", value: 3 },
      { title: "Black", value: 2 },
      { title: "Asian", value: 1 },
      { title: "Hispanic", value: 2 },
      { title: "Other", value: 1 },
    ],
    religion: [
      { title: "Christian", value: 12 },
      { title: "Jewish", value: 3 },
      { title: "Buddhist", value: 2 },
      { title: "Muslim", value: 4 },
      { title: "Sikh", value: 8 },
      { title: "Hindu", value: 1 },
    ],
  },
  {
    name: "Meta",
    gender: [
      { title: "Male", value: 15 },
      { title: "Female", value: 10 },
      { title: "Non-binary", value: 5 },
    ],
    race: [
      { title: "White", value: 3 },
      { title: "Black", value: 1 },
      { title: "Asian", value: 1 },
      { title: "Hispanic", value: 4 },
      { title: "Other", value: 2 },
    ],
    religion: [
      { title: "Christian", value: 5 },
      { title: "Jewish", value: 3 },
      { title: "Buddhist", value: 2 },
      { title: "Muslim", value: 4 },
      { title: "Sikh", value: 2 },
      { title: "Hindu", value: 1 },
    ],
  },
];

const Pie = ({ a }) => {
  return (
    <PieChart
      data={a.map((g) => {
        return {
          title: g.title,
          value: g.value,
          color: colMap[g.title],
        };
      })}
      label={({ dataEntry }) => (dataEntry?.value !== 0 ? dataEntry.title : "")}
      labelStyle={{ fontSize: 5 }}
      style={{ width: 250 }}
      animate
    />
  );
};

const Explore = () => {
  const history = useHistory();
  const renderCompany = (c) => {
    const { name, gender, race, religion } = c;
    return (
      <Box mb={4} mt={3}>
        <Paper
          p={3}
          style={{
            padding: 20,
            maxWidth: 1000,
            margin: "0 auto",
            marginBottom: 12,
            minHeight: 360,
          }}
        >
          <Typography style={{ textAlign: "center" }} variant="h5">
            {name}
          </Typography>
          <Box
            mt={3}
            mb={3}
            display="flex"
            alignItems="center"
            maxWidth="1000px"
            justifyContent="center"
          >
            <Box mr={6} />
            <Pie a={race} />
            <Box mr={6} />
            <Pie a={gender} />
            <Box mr={6} />
            <Pie a={religion} />
          </Box>
          <Button
            onClick={() => history.push(`/job-board?company=${name}`)}
            variant="contained"
            style={{ float: "right" }}
          >
            Apply
          </Button>
        </Paper>
      </Box>
    );
  };
  return (
    <Box>
      {companies.map((c) => {
        return renderCompany(c);
      })}
    </Box>
  );
};

export default Explore;
