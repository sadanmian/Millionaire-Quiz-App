import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import wrong from "../assets/wrong.mp3";
import correct from "../assets/correct.mp3";

export default function Ques({
  QuesData,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);

//   useEffect(() => {
//     letsPlay();
//   }, [letsPlay]);

  useEffect(() => {
    setQuestion(QuesData[questionNumber - 1]);
  }, [QuesData, questionNumber]);

  const delay = (duration, callBack) => {
    setTimeout(() => {
      callBack();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(4000, () => {
      if (a.correct) {
        correctAns();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAns();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="ques">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
