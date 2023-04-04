import { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-size: 1.25em;
  }
  input {
    width: 50%;
    height: 50px;
    border-radius: 10px;
    border: none;
    margin-bottom: 10px;
    ::placeholder {
      text-align: center;
    }
  }
  label {
    margin-top: 10px;
  }
  .ExerienceInput {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      margin-top: 10px;
    }
    label {
      font-size: 1em;
    }
  }
  .removeExperience {
    color: blue;
    text-decoration: underline;
    width: 100%;
    cursor: pointer;
  }
  .addMore {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 5px;
  }
  .extraInfoSection {
    width: 100%;
    margin-top: 25px;
    select {
      margin: 5px 0;
    }
    input {
      width: 10%;
      height: auto;
      border-radius: 0;
      border: 1px solid black;
      margin: 5px 0;
    }
  }
  button {
    width: 50%;
    height: 50px;
    border-radius: 50px;
    background: black;
    color: white;
    cursor: pointer;
  }
  .skillInput {
    width: 100%;
    margin-top: 5px;
    input {
      width: 30%;
    }
    .skillBox {
      border: 1px solid black;
      display: inline-block;
      padding: 5px;
      border-radius: 5px;
      background: gray;
      color: white;
      margin-right: 15px;
      span {
        cursor: pointer;
      }
    }
  }
`;
export default function UserForm({ setFilledForm }) {
  const [experiences, setExperiences] = useState([
    { company: "", position: "", description: "" },
  ]);
  const [skills, setSkills] = useState([]);
  let handleChange = (i, e) => {
    let newFormValues = [...experiences];
    newFormValues[i][e.target.name] = e.target.value;
    setExperiences(newFormValues);
  };
  let addFormFields = () => {
    setExperiences([
      ...experiences,
      { company: "", position: "", description: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...experiences];
    newFormValues.splice(i, 1);
    setExperiences(newFormValues);
  };
  const addSkill = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.value.length > 0) {
        setSkills([...skills, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const removeSkill = (i) => {
    let newSkillsList = [...skills];
    newSkillsList.splice(i, 1);
    setSkills(newSkillsList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilledForm(true);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h3>Experiences</h3>
      {experiences.map((value, index) => {
        return (
          <section className="ExerienceInput">
            <label>Company *</label>
            <input
              type="text"
              name="company"
              value={value.company || ""}
              required={true}
              onChange={(e) => handleChange(index, e)}
            />
            <label>Position *</label>
            <input
              type="text"
              name="position"
              value={value.position || ""}
              onChange={(e) => handleChange(index, e)}
              required={true}
            />
            <label>Job Responsibilities</label>
            <textarea
              name="description"
              value={value.description || ""}
              onChange={(e) => handleChange(index, e)}
              rows="10"
              cols="10"
            />
            {index ? (
              <div
                type="button"
                onClick={() => removeFormFields(index)}
                className="removeExperience"
              >
                Remove Experience
              </div>
            ) : null}
          </section>
        );
      })}
      <div type="button" onClick={addFormFields} className="addMore">
        Add New Experience
      </div>
      <h3>Skills</h3>
      <section className="skillInput">
        <input
          type="text"
          placeholder="Enter a skill and press ENTER"
          onKeyDown={addSkill}
        />
        <div className="skillList">
          {skills.map((value, index) => {
            return (
              <div className="skillBox" key={index}>
                {value} <span onClick={() => removeSkill(index)}>x</span>
              </div>
            );
          })}
        </div>
      </section>

      <h3>Extra Information</h3>
      <p>
        Some extra pieces of information for the recruiting process. Note: none
        of this information will be shared with recruiters
      </p>
      <section className="extraInfoSection">
        <label>Age:</label> <br />
        <input></input>
        <br />
        <label for="race-select">Race:</label> <br />
        <select name="race" id="race-select">
          <option value="">--Please choose an option--</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="latino">Hispanic/Latino</option>
          <option value="parrot">Asian</option>
        </select>
        <br />
        <label for="gender-select">Gender:</label> <br />
        <select name="gender" id="gender-select">
          <option value="">--Please choose an option--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Not Male/Female/Latino</option>
        </select>
        <br />
        <label>Religious Beliefs:</label> <br />
        <select>
          <option>--Please choose an option--</option>
          <option>Christian</option>
          <option>Islamic</option>
          <option>Hindu</option>
          <option>Buddhist</option>
          <option>Athiest</option>
          <option>Other</option>
        </select>
        <br />
        <label>Do you identify as a memeber of the LGBTQ+?</label> <br />
        <select>
          <option>--Please choose an option--</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <br />
      </section>

      <button type="submit">Submit</button>
    </FormWrapper>
  );
}
