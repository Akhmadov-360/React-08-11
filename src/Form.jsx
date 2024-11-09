import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submit ${inputValue}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <p>Name: {inputValue}</p>
    </>
  );
};

export default Form;