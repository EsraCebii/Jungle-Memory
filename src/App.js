import React, { useEffect, useRef, useState } from "react";
import uniqueCardsArray from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./components/Card";
import Finish from "./components/Finish/index.js";
import Start from "./components/Start/index";



function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

const App = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpencards] = useState([]);
  const [matchedCards, setMatchedcards] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );

  const [num, setNum] = useState(51);
  let intervalRef = useRef();
  const decreaseNum = () => setNum((prev) => prev - 1);

  const handleClick = () => {
      intervalRef.current = setInterval(decreaseNum, 1000);
  };


  const timeout = useRef(null);
  const [puan, setPuan] = useState(0);


  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(matchedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      clearInterval(intervalRef.current);
      const highScore = Math.max(puan, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  
  useEffect(() => {
    time()
  }, [num])

  const kazandı = Object.keys(matchedCards).length === uniqueCardsArray.length;
  const time = () => {
    if (Object.keys(matchedCards).length === uniqueCardsArray.length && num === 0) {
      clearInterval(intervalRef.current);
      setShowModal(true);
      const highScore = Math.max(puan, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    } else if( num === 0) {
      clearInterval(intervalRef.current);
      setShowModal(true);
      const highScore = Math.max(puan, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);

    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setPuan(puan + 50)
      setMatchedcards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpencards([]);
    } else {
      setPuan(puan - 25)
    }
    timeout.current = setTimeout(() => {
      setOpencards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpencards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpencards([index]);
    }
  };
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };

  }, [openCards]);

  useEffect(() => {

    checkCompletion();

  }, [matchedCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card.type]);
  };
  const handleRestart = () => {
    setMatchedcards({});
    setOpencards([]);
    setShowModal(false);
    setMoves(0);
    setPuan(0);
    setNum(51);
    intervalRef.current = setInterval(decreaseNum, 1000);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <div> {
      num === 51 && (
        <Start handleClick={handleClick} />
      )
      }
      {
        num < 51 && (
          <div>
          <Header
          moves={moves}
          bestScore={bestScore}
          handleRestart={handleRestart}
          puan={puan}
          num= {num}
          
        
        />
        <Container>
          <Row>
            {cards.map((card, index) => {
              return (
                <Col xs={6} md={3} lg={2}>
                  <Card
                    key={index}
                    card={card}
                    index={index}
                    matchedCards={matchedCards}
                    isDisabled={shouldDisableAllCards}
                    isInactive={checkIsInactive(card)}
                    isFlipped={checkIsFlipped(index)}
                    onClick={handleCardClick}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <Finish
          num={num}
          showModal={showModal}
          puan={puan}
          bestScore={bestScore}
          handleRestart={handleRestart}
          kazandı={kazandı}
        />
        </div>

        )
      }
      
   
    </div>
  );
};

export default App;