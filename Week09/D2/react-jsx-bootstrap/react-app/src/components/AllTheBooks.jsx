import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import SingleCard from "./singleCard";
import CommentSection from "./CommentSection";
import { Container } from "react-bootstrap";

const CardBooks = () => {
  const [category, setCategory] = useState([]);
  const [categoryFiltered, setCategoryFiltered] = useState([]);

  const handleSearch = (event) => {
    let value = event.target.value;
    const actualState = category;
    const result = actualState.filter((book) => {
      return book.title.toLowerCase().includes(value.toLowerCase());
    });
    setCategoryFiltered(result);
  };
  useEffect(() => {
    setCategoryFiltered(category);
  }, [category]);

  return (
    <>
      <Container fluid className="bg-light">
        <div className="text-end me-5">
          <input type="text" onChange={handleSearch} />
        </div>
        <Buttons setCategory={setCategory} />
        <div className="d-flex flex-wrap justify-content-between m-2">
          {categoryFiltered.map((book, index) => {
            return (
              <SingleCard book={book} key={book.asin}>
                <CommentSection />
              </SingleCard>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default CardBooks;
