import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { cloneDeep } from "lodash";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import GridItem from "./GridItem";
import { colMap } from "./constants/colMap";

const defOps = [
  {
    label: "Hispanic",
    value: 1,
  },
  { label: "First Nations", value: 2 },
  { label: "Asian", value: 3 },
  { label: "Black", value: 4 },
  { label: "White", value: 5 },
  { label: "European", value: 6 },
  { label: "Middle Eastern", value: 7 },
  { label: "Male", value: 8 },
  { label: "Female", value: 9 },
  { label: "Non-binary", value: 10 },
  { label: "LGBTQ+", value: 24 },
  { label: "Disability", value: 25 },
  { label: "Age < 18", value: 11 },
  { label: "18 < Age < 30", value: 12 },
  { label: "30 < Age < 50", value: 13 },
  { label: "50 < Age < 70", value: 14 },
  { label: "Age 70+", value: 15 },
  { label: "Christian", value: 30 },
  { label: "Muslim", value: 17 },
  { label: "Hindu", value: 18 },
  { label: "Buddhist", value: 19 },
  { label: "Atheist", value: 20 },
  { label: "Jewish", value: 21 },
  { label: "Sikh", value: 22 },
  { label: "Other", value: 31 },
];

const OptionList = ({ options, setSelected, selected, onDel }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]?.value);
  const [percentage, setPercentage] = useState(0);

  const handleOptionChange = (event) => {
    setSelected({
      ...selected,
      label: defOps.find((d) => d?.value === event.target?.value).label,
    });
    console.log();
    setSelectedOption(event.target?.value);
  };

  const handlePercentageChange = (event) => {
    setSelected({ ...selected, weight: parseInt(event.target?.value) });
    setPercentage(event.target?.value);
  };
  console.log(selected);

  return (
    <Box>
      <Box mb={2} />
      <Box display="flex" alignItems="center">
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="option-select-label">Select a category:</InputLabel>
          <Select
            value={defOps.find((d) => d.label === selected.label)?.value}
            onChange={handleOptionChange}
            label={`Select a category:`}
          >
            {options.map(({ label, value }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          id="percentage-input"
          label="Assign a weight"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 100 } }}
          value={selected.weight}
          style={{ minWidth: 140 }}
          onChange={handlePercentageChange}
          sx={{ m: 1 }}
        />
        <IconButton style={{ width: 52, height: 52 }}>
          <DeleteIcon onClick={onDel} />
        </IconButton>
      </Box>
    </Box>
  );
};

const HiringManager = () => {
  const [selectedOps, setSelectedOps] = useState([]);
  const [ops, setOps] = useState([
    {
      label: "Hispanic",
      weight: 1,
    },
  ]);
  console.log(ops);
  return (
    <Box sx={{ margin: "0 auto", maxWidth: "800px", marginTop: 3 }}>
      <Typography variant="h4">Set Filters</Typography>
      <Typography variant="subtitle1">
        Choose from a pre-set template or customize your own criteria
      </Typography>
      <Box mt={2} />
      <Typography variant="h5">Templates</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "16px",
          marginTop: 2,
        }}
      >
        <GridItem
          color="#f77060"
          text="Ethnicity / Race"
          setTemplate={(o) => setOps(o)}
        />
        <GridItem
          color="#0cb300"
          text="Gender"
          setTemplate={(o) => setOps(o)}
        />
        <GridItem color="#00a1b3" text="Age" setTemplate={(o) => setOps(o)} />
        <GridItem
          color="#d8f291"
          text="Disability"
          setTemplate={(o) => setOps(o)}
        />
        <GridItem
          color="#ff9f30"
          text="LGBTQ+"
          setTemplate={(o) => setOps(o)}
        />
        <GridItem
          color="#eb90f5"
          text="Religion"
          setTemplate={(o) => setOps(o)}
        />
      </Box>
      <Box mt={4} />
      <Typography variant="h5">Set Custom Criteria</Typography>
      <Box mt={4} display="flex" justifyContent="space-between">
        <Box>
          {ops.map((op, i) => (
            <OptionList
              options={defOps}
              setSelected={({ label, weight }) => {
                const target = cloneDeep(ops);
                target[i].label = label;
                target[i].weight = weight;
                setOps(target);
              }}
              onDel={() => {
                const target = cloneDeep(ops);
                target.splice(i, 1);
                setOps(target);
              }}
              selected={op}
            />
          ))}
          <Button
            onClick={() => {
              const copy = cloneDeep(ops);
              copy.push({ label: "", weight: 0 });
              setOps(copy);
            }}
          >
            + Add
          </Button>
          <Button
            onClick={() => {
              const copy = cloneDeep(ops);
              copy.pop();
              setOps(copy);
            }}
          >
            - Remove
          </Button>
        </Box>
        <Box>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Applicant Pool
          </Typography>
          <PieChart
            data={ops.map((op) => {
              return {
                title: op.label,
                value: op.weight,
                color: colMap[op.label],
              };
            })}
            label={({ dataEntry }) =>
              dataEntry?.value !== 0 ? dataEntry.title : ""
            }
            labelStyle={{ fontSize: 5 }}
            style={{ width: 320 }}
            animate
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HiringManager;
