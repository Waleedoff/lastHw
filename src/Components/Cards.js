import React, { useState, useEffect } from "react";
import CardData from "./CardData";
import { Card, Button} from 'react-bootstrap';

function Cards() {
  const  [memeImage, setMemeImage] =  useState();

  const MyRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);

   useEffect(()=>{

   })
  };
  return (
    <div>
      {/* <button onClick={MyRandomEmg}>Get a new image</button>
      <img src={memeImage} alt="nothing"></img> */}

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={memeImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={MyRandomEmg}>Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  );
}

export default Cards;
