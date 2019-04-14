import React, { Component } from "react";
import API from "../utils/API";
import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Container from "../components/Grid/Container.js";
import Row from "../components/Grid/Row.js";

class Search extends Component {
  state = {
    title: "",
    author: "",
    results: [],
    error: ""
  };

  componentDidMount() {}

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state.title);
    console.log(this.state.author);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("Search Clicked");
    const title = this.state.title;
    const author = this.state.author;

    if (title && !author) {
      this.searchBooks(title);
    } else if (author && !title) {
      this.searchAuthor(author);
    }
  };

  searchBooks = title => {
    API.searchBookTitle(title)
      .then(res => {
        console.log(res.data.items[0].volumeInfo);
        console.log(res.data.items);
        this.setState({ results: res.data.items });
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };

  searchAuthor = author => {
    API.searchBookAuthor(author)
      .then(res => {
        console.log(res);
        console.log(res.data.items);
        this.setState({ results: res.data.items });
      })
      .catch(err => console.log(err));
  };

  handleSaveBtn = e => {
    const saveFrom = e.target;
    const title = saveFrom.getAttribute("title");
    const authors = saveFrom.getAttribute("authors");
    const description = saveFrom.getAttribute("description");
    const image = saveFrom.getAttribute("image");
    const link = saveFrom.getAttribute("link");

    API.saveBook({
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Banner backgroundImage="./images/books-banner.jpg">
          <h1>Google Books</h1>
          <h3>Browse, View, and Save Books</h3>
          <h6>Powered By Google Books</h6>
        </Banner>
        <Container style={{ marginTop: 20 }}>
          <Row>
            <SearchForm
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Row>
          <Row style={{ marginTop: 20 }}>
            <SearchResults
              results={this.state.results}
              handleSaveBtn={this.handleSaveBtn}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
