import React from "react";

export default function Ques() {
  return (
    <div className="ques">
      <div className="question">Here is the question</div>
      <div className="answers">
        <div className="answer correct">option 1</div>
        <div className="answer wrong">option 2</div>
        <div className="answer">option 3</div>
        <div className="answer">option 4</div>
      </div>
    </div>
  );
}
