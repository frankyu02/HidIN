import { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import JobBoard from "./jobBoard";
const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 2%;

  h2 {
    font-size: 1.5em;
    text-align: center;
  }
`;
function User(props) {
  const [filledForm, setFilledForm] = useState(false);
  return (
    <Wrapper>
      {/* {filledForm ? (
        <JobBoard />
      ) : (
        <div>
          <h2>
            Hi! Before we procede, let's fill in some information so that
            employers can get to know you better!
          </h2>
          <UserForm setFilledForm={setFilledForm} />
        </div>
      )} */}
      <JobBoard />
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(User);
