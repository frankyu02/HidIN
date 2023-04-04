import styled from "styled-components";
import {
  BsFillBriefcaseFill,
  BsFillBuildingFill,
  BsFillPencilFill,
} from "react-icons/bs";

const Wrapper = styled.div`
  width: 60%;
  padding-left: 20px;
  padding-top: 20px;
  border-left: 1px solid black;
  h2 {
    text-align: left;
  }
  p {
    margin-top: 10px;
  }
  .positionSummary {
    margin-top: 20px;
  }
  button {
    margin-top: 30px;
    max-width: 480px;
    padding: 1rem 2rem;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    background: lightblue;
  }
  h3 {
    margin-top: 50px;
  }
  .appliedAlready {
    opacity: 50%;
    cursor: default;
  }
`;
export default function JobDescription({
  job,
  appliedJobs,
  setAppliedJobs,
  setOpen,
}) {
  const found = appliedJobs.find((e) => e === job.id);
  const apply = () => {
    const newArr = [...appliedJobs, job.id];
    setAppliedJobs(newArr);
    setOpen(true);
  };
  return (
    <Wrapper>
      <h2>{job.title}</h2>
      <p>
        {job.company}, {job.location}
      </p>
      <div className="positionSummary">
        <p>
          <BsFillBriefcaseFill /> {job.type}
        </p>
        <p>
          <BsFillBuildingFill /> {job.employees} employees
        </p>
      </div>
      {found ? (
        <button className="appliedAlready">Applied</button>
      ) : (
        <button onClick={apply}>
          Apply <BsFillPencilFill />
        </button>
      )}
      <h3>Job Description</h3>
      <p>{job.description}</p>
    </Wrapper>
  );
}
