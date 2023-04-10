import styled from "styled-components";
import JobPostings from "./postings";
import { Jobs } from "./postingData";
import { useEffect, useState } from "react";
import JobDescription from "./jobDescription";
import ConfirmationModal from "./confirmationModal";
import {
  Box,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";

const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  max-height: calc(100vh - 82px);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border: 1px solid black;
`;
const FilterWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
`;
export default function JobBoard() {
  const [curPosting, setCurPosting] = useState(Jobs[0]);
  const [applied, setApplied] = useState([]);
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState(Jobs);
  const locations = [
    "All",
    "New York, NY",
    "Toronto, ON",
    "San Jose, CA",
    "Tokyo, Japan",
    "Paris, France",
    "London, UK",
    "Rio de Janeiro, Brazil",
    "Sydney, Australia",
    "Moscow, Russia",
  ];
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (!location || location === "All") {
      setJobs(Jobs);
      return;
    }
    const ret = [];
    Jobs.forEach((job) => {
      if (job.location === location) {
        ret.push(job);
      }
    });
    setJobs(ret);
    setCurPosting(ret[0]);
  }, [location]);
  return (
    <div>
      <FilterWrapper>
        <Box display="flex" alignItems="center">
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="option-select-label">Select a location:</InputLabel>
            <Select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              label={`Select a Location:`}
            >
              {locations.map((label, value) => {
                return (
                  <MenuItem key={value} value={label}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </FilterWrapper>
      <Wrapper>
        <JobPostings
          jobs={jobs}
          curJob={curPosting}
          setCurjob={setCurPosting}
        />
        <JobDescription
          job={curPosting}
          appliedJobs={applied}
          setAppliedJobs={setApplied}
          setOpen={setOpen}
        />
        {open && <ConfirmationModal job={curPosting} setOpen={setOpen} />}
      </Wrapper>
    </div>
  );
}
