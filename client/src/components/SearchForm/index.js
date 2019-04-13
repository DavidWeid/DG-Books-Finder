import React from "react";
import "./searchForm.css";

const SearchForm = props => {
  return (
    <form className="search">
      <div className="form-row">
        <div className="col-auto">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="book"
            type="text"
            className="form-control"
            placeholder="Book Title"
          />
        </div>
        <div className="col-auto">
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
