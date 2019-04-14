import React, { Component } from "react";
import API from "../utils/API";
import Banner from "../components/Banner";
import SavedResults from "../components/SavedResults";
import Container from "../components/Grid/Container.js";
import Row from "../components/Grid/Row.js";

class Saved extends Component {
  state = {
    books: []
  };

  componentWillMount() {
    console.log(this.state.books);
    this.loadSavedBooks();
  };

  loadSavedBooks = () => {
    API.getAllBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleDeleteBtn = (id) => {
    // const _id = e.target.id;
    // console.log(_id);
  }

  render() {
    return (
      <div>
        <Banner backgroundImage="./images/books-banner.jpg">
          <h1>Google Books</h1>
          <h3>Saved Books</h3>
          <h6>View or Remove</h6>
        </Banner>
        <Container style={{ marginTop: 20 }}>
          <Row style={{ marginTop: 20 }}>
            <SavedResults results={this.state.books} handleDeleteBtn={this.handleDeleteBtn} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
