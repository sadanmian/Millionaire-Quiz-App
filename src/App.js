import "./app.css";
import { MoneyPyramid } from "./Data";

function App() {
  return (
    <div className="app">
      <div className="main"></div>
      <div className="pyramid">
        <ul className="moneyList">
          {MoneyPyramid.map((e) => (
            <li className="moneyListItem">
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
