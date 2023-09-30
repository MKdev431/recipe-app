import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export default function Search() {
  const [input, setInput] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    console.log("done");
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;