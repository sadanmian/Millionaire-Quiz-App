import { useEffect, useState } from "react";
import "./app.css";
import { MoneyPyramid } from "./Data";
import { QuesData } from "./QuestionData";
import Ques from "./components/Ques";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(MoneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [MoneyPyramid, questionNumber]);
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You Earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Ques
                QuesData={QuesData}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {MoneyPyramid.map((e) => (
            <li
              key={e.id}
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
