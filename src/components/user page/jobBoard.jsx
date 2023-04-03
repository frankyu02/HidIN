import styled from "styled-components";
import JobPostings from "./postings";
import { Jobs } from "./postingData";
import { useState } from "react";
import JobDescription from "./jobDescription";
import ConfirmationModal from "./confirmationModal";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  max-height: calc(100vh - 82px);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border: 1px solid black;
`;
export default function JobBoard() {
  const [curPosting, setCurPosting] = useState(Jobs[0]);
  const [applied, setApplied] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <JobPostings jobs={Jobs} curJob={curPosting} setCurjob={setCurPosting} />
      <JobDescription
        job={curPosting}
        appliedJobs={applied}
        setAppliedJobs={setApplied}
        setOpen={setOpen}
      />
      {open && <ConfirmationModal job={curPosting} setOpen={setOpen} />}
    </Wrapper>
  );
}
