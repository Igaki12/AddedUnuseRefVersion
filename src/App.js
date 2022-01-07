import "./styles.css";
import React, { useRef, useState, useEffect } from "react";

const SampleComponent = () => {
  // const inputRefObject = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("レンダリング！");
  });
  const handleClick = () => {
    // setText(inputRefObject.current.value);
    setText(inputValue);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const textReset = () => {
    setText("");
    // inputRefObject.current.value = "";
    setInputValue("");
  };

  return (
    <>
      {/* <input ref={inputRefObject} type="text" /> */}
      <input value={inputValue} onChange={handleChange} type="text" />
      <button onClick={handleClick}>set text </button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  );
};
export default function App() {
  return <SampleComponent />;
}
