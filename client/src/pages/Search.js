import React, { Component } from "react";
import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Container from "../components/Grid/Container.js";
import Row from "../components/Grid/Row.js";

class Search extends Component {
  state = {
    search: "",
    results: [
      {
        _id: 1,
        title: "How Not to Code",
        authors: "Spongebob",
        description: "What I learned from coding school is...",
        image:
          "https://i.pinimg.com/236x/c4/2f/e3/c42fe38d2c1db72e0bc2ad376a698387--boy-boy-hot-anime.jpg?b=t",
        link: "https://google.com"
      },
      {
        _id: 2,
        title: "Naming Apps 101",
        authors: "Chad Armstrong",
        description: "I think I blacked out when you asked the questions.",
        image:
          "https://i.pinimg.com/736x/c6/1d/f1/c61df19d19c5812065fead23613a42a4--anime-animals-anime-guys.jpg",
        link: "https://google.com"
      }
    ],
    error: ""
  };

  componentDidMount() {}

  handleInputChange = e => {
    this.setState({ search: e.target.value });
    console.log(this.state.search);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("Search Clicked");
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
            <SearchResults results={this.state.results} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
