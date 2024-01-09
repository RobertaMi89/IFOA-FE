import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Buttons from './Buttons';

const CardBooks = () => {
  const [category, setCategory] = useState([])

  return (
    <>
    <Buttons setCategory={setCategory}/>
      <div className="d-flex flex-wrap justify-content-between">
        {category.map((book, index) => {
          return(
          <Card key={book.asin}style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.asin}</Card.Text>
            <Button variant="primary">Compra</Button>
          </Card.Body>
        </Card>
        );
      })}
    </div>
    </>
  );
}


export default CardBooks;