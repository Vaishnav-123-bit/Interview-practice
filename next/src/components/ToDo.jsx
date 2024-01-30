import React, { useState } from "react";

const ToDo = (props) => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div className="input-container">
        <input
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          className="input-box-todo"
          value={inputText}
        />
        <button
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
          className="add-btn"
        >
          +
        </button>
      </div>
      <div>{inputText}</div>
    </>
  );
};

export default ToDo;
