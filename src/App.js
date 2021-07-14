import "./App.css";
import { useEffect, useState, useCallback } from "react";

function App() {
  const [card, setCard] = useState([]);
  const [value, setValue] = useState([]);
  const [secondCard, setSecondCard] = useState([]);
  const [secondValue, setSecondValue] = useState([]);
  const [message, setMessage] = useState("");

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
    );
    response = await response.json();
    setCard(response.cards[0].image);
    setValue(response.cards[0].value);
    setSecondCard(response.cards[1].image);
    setSecondValue(response.cards[1].value);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  const messages = (value) => {
    if (value > secondValue) {
      setMessage("win");
    } else {
      setMessage("lose");
    }
  };

  return (
    <div>
      <div className="App">
        <h2>Card Game </h2>
      </div>
      <div>
        <h3>Player one</h3>
      </div>
      <div>
        <button
          value={value}
          onChange={messages}
          onClick={fetchMyAPI}
          style={{ margin: 20 }}
        >
          <img
            style={{ height: 310, width: 200 }}
            src="https://previews.123rf.com/images/orcearo/orcearo1212/orcearo121200004/17069555-playing-card-back-red-abstract-floral-pattern-closeup.jpg"
            alt="button image"
          />
        </button>
        <img src={card} alt="card image" />
        <h1 style={{ margin: "auto" }}>The Value is: {value}</h1>
      </div>
      <div>
        <h3>Player two {message}</h3>
      </div>
      <div>
        <button style={{ margin: 20 }}>
          <img
            style={{ height: 310, width: 200 }}
            src="https://previews.123rf.com/images/orcearo/orcearo1212/orcearo121200004/17069555-playing-card-back-red-abstract-floral-pattern-closeup.jpg"
            alt="button image"
          />
        </button>
        <img src={secondCard} alt="card image" />
        <h1 style={{ margin: "auto" }}>The Value is: {secondValue}</h1>
      </div>
    </div>
  );
}

export default App;
