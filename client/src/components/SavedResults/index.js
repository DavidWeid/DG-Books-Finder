import React from "react";
import "./savedResults.css";
import Container from "../Grid/Container.js";
import Row from "../Grid/Row.js";

const SavedResults = props => {
  const books = props.results;
  console.log(books);

  const listBooks = books.map(book => (
    <Row fluid="true" key={book._id}>
      <div key={book._id} className="media list-div col-12">
        <img
          alt={book.name}
          src={book.image}
          className="list-img img-fluid img-thumbnail mr-3"
        />

        <div className="media-body">
          <h4>{book.title}</h4>
          <h5>{book.authors}</h5>
          <a
            className="list-btn btn btn-danger"
            rel="noopener noreferrer"
            target="_blank"
            href={book.link}
          >
            View on Google Books
          </a>{" "}
          <br />
          <button
            className="list-btn save-btn btn btn-danger"
            type="button"
            onClick={props.handleDeleteBtn}
          >
            Remove Book
          </button>
          <button
            className="list-btn btn btn-danger"
            type="button"
            data-toggle="collapse"
            data-target={`#collapseDescription${book._id}`}
            aria-expanded="false"
            aria-controls="collapseDescription"
          >
            Description
          </button>
          <div className="collapse" id={`collapseDescription${book._id}`}>
            {book.description}
          </div>
        </div>
      </div>
    </Row>
  ));

  return <Container>{listBooks}</Container>;

  // return <div>Hello</div>
};

export default SavedResults;
