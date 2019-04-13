import React from "react";
import "./searchForm.css";

const SearchForm = props => {
  return (
    <form className="search">
      <div className="form-row">
        <div className="col-auto form-col">
          <input
            value={props.title}
            onChange={props.handleInputChange}
            name="title"
            type="text"
            className="form-control"
            placeholder="Book Title"
          />
        </div>
        <div className="col-auto form-col">
          <input
            value={props.author}
            onChange={props.handleInputChange}
            name="author"
            type="text"
            className="form-control"
            placeholder="Author Name"
          />
        </div>
        <div className="col-auto form-col">
          <button
            type="submit"
            onClick={props.handleFormSubmit}
            className="btn btn-warning"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
