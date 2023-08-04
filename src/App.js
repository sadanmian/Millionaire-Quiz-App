import { useState } from "react";
import "./app.css";
import { MoneyPyramid } from "./Data";
import Ques from "./components/Ques";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Ques />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {MoneyPyramid.map((e) => (
            <li
              className={
                questionNumber == e.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{e.id}</span>
              <span className="moneyListItemAmount">{e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
