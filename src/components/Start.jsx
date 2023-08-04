import React, { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();
  return (
    <div className="start">
      <input
        type="text"
        className="startInput"
        placeholder="Enter Your Name"
        ref={inputRef}
      />
      <button
        className="startButton"
        onClick={() => {
          inputRef.current.value && setUsername(inputRef.current.value);
        }}
      >
        Start
      </button>
    </div>
  );
}
