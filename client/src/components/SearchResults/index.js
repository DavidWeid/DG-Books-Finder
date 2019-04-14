import React from "react";
import "./searchResults.css";
import Container from "../Grid/Container.js";
import Row from "../Grid/Row.js";

const SearchResults = props => {
  const books = props.results;

  const listBooks = books.map(book => (
    <Row fluid="true" key={book.volumeInfo.industryIdentifiers[0].identifier}>
      <div
        key={book.volumeInfo.industryIdentifiers[0].identifier}
        className="media list-div col-12"
      >
        <img
          alt={book.volumeInfo.title}
          src={book.volumeInfo.imageLinks.thumbnail}
          className="list-img img-fluid img-thumbnail mr-3"
        />

        <div className="media-body">
          <h4>{book.volumeInfo.title}</h4>
          <h5>{book.volumeInfo.authors[0]}</h5>
          <h5>{book.volumeInfo.authors[1]}</h5>
          <h5>{book.volumeInfo.authors[2]}</h5>
          <a
            className="list-btn btn btn-danger"
            rel="noopener noreferrer"
            target="_blank"
            href={book.volumeInfo.canonicalVolumeLink}
          >
            View on Google Books
          </a>{" "}
          <br />
          <button
            className="list-btn save-btn btn btn-danger"
            type="button"
            onClick={props.handleSaveBtn}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.canonicalVolumeLink}
          >
            Save Book
          </button>
          <button
            className="list-btn btn btn-danger"
            type="button"
            data-toggle="collapse"
            data-target={`#collapseDescription${
              book.volumeInfo.industryIdentifiers[0].identifier
            }`}
            aria-expanded="false"
            aria-controls="collapseDescription"
          >
            Description
          </button>
          <div
            className="collapse"
            id={`collapseDescription${
              book.volumeInfo.industryIdentifiers[0].identifier
            }`}
          >
            {book.volumeInfo.description}
          </div>
        </div>
      </div>
    </Row>
  ));

  return <Container>{listBooks}</Container>;
};

export default SearchResults;
