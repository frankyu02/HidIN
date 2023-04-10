import { useEffect, useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 40%;
  overflow-y: auto;
  border-top-left-radius: 15px;
  .active {
    background-color: lightblue;
  }
  .postingContainer {
    height: 100px;
    display: flex;
    .companyInfo {
      margin-top: 10px;
      margin-left: 25px;
      width: 100%;
      h3 {
        font-size: 1.15rem;
      }
      p {
        margin-top: 2px;
        font-size: 90%;
      }
      &:hover {
        cursor: pointer;
        h3 {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default function JobPostings({ jobs, curJob, setCurjob, filter }) {
  const handleJobSwap = (job) => {
    setCurjob(job);
  };
  const [searchableJobs, setSearchableJobs] = useState(jobs);
  useEffect(() => {
    if (!filter) return;
    if (jobs.filter((j) => j.company === filter).length === 0) return;
    setCurjob(jobs.filter((j) => j.company === filter)[0]);
    setSearchableJobs(jobs.filter((j) => j.company === filter));
  }, [filter]);
  return (
    <Wrapper>
      {searchableJobs.map((job, index) => {
        return (
          <div
            key={index}
            className={
              job.id === curJob.id
                ? "active postingContainer"
                : "postingContainer"
            }
            onClick={() => handleJobSwap(job)}
          >
            <img src="../images/nav-jobs.svg" alt="briefcase" />
            <div className="companyInfo">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
