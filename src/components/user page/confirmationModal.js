import styled from "styled-components";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    border-radius: 25px;
    position: relative;
    width: 50%;
    background: white;
    h2 {
      color: green;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 35px;
    }
    span {
      margin-left: 10px;
    }
    .close {
      position: absolute;
      right: 5%;
      top: 10px;
      font-size: 1.5em;
      cursor: pointer;
    }
    p {
      width: 100%;
      text-align: center;
      margin: 25px 0;
    }
  }
`;
export default function ConfirmationModal({ job, setOpen }) {
  return (
    <Wrapper>
      <div className="content">
        <div className="close" onClick={() => setOpen(false)}>
          X
        </div>
        <h2>
          Success!
          <span>
            <BsFillPatchCheckFill />
          </span>
        </h2>
        <p>
          You have successfully applied to the {job.title} position at{" "}
          {job.company}
        </p>
      </div>
    </Wrapper>
  );
}
