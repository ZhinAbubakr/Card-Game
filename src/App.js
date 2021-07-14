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

  const messages = () => {
    if (value > secondValue) {
      setMessage("win");
    } else {
      setMessage("lose");
    }
  };
  console.log(message);

  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;
