import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import uniqueCardsArray from "./data";


function swap(array,i,j){
  const temp=array[i];
  array[i]=array[j];
  array[j]=temp;
}

function suffleCards(array){
  const length = array.length;
  for(let i=length; i>0; i--){
    const randomIndex = Math.floor(Math.random() *i);const currentIndex = i-1;
    swap(array, currentIndex, randomIndex)
  }
  return array;
}

function App() {
  const [cards, setCards]= useState(()=>suffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  return (
    <div >
      <Header />
      <Container>
        <Row>
          {cards.map((card,index)=>{
            return(
              <Col xs={6} md={3} lg={2}>
              <Card 
              key={index}
              card={card}
              index={index}
              />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
