import axios from "axios";

const booksAPIKey = "AIzaSyCkQiwFw8PbmGcRBiESXi22hXfkQc-sOsE";

export default {
  searchBookTitle: function(title) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${booksAPIKey}`);
  },
  searchBookAuthor: function(author) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${author}`);
  }
};
