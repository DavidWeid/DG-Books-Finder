# DG-Books-Finder
- - -
[David's Google Books](https://dg-books.herokuapp.com/) is Live! :book:
- - -
## Overview

DG Books is a Node/Express/React appliation that allows Users to search the Google Books API via book title or author. After searching, books are displayed to the User. The User can then view a short description of the book, view the book on the Google Books store, or save the book to refer back to at a later time. When Users view the "Saved" page, all saved books are displayed and the User can then unsave a book, view the description as before, or view the book on the Google Books store.

## Directory Structure

This application's file system is basically divided into two sections -- the front-end and the back-end.

### The Front-end
The front end, found under "client", consists of "public" files and "source" (src) files. The public files deliver up static content, such as images, as well as the core HTML page. This React app HTML has a single `#root` div that holds our visible content. The source files are where the magic happens (display-wise). `index.js` renders the <App /> component and displays it in `#root`. Our App component handles the site routing, displaying the appropriate page component, as well as our static navbar and footer. Routing is handled by "react-router-dom". If a route matches a predetermined route, we load up the appropriate component page. An example:

`<Route exact path="/Search" component={Search} />`

- - - 
We have two pages for this application: a "Search" page and a "Saved" page. Both pages are stateful components. <Search /> handles the User's input (either a title or author search string). User input is saved as a state, and is passed down to our <SearchForm />, which also receives an onClick method to handle the form submit from our <Search /> page (the method is controlled by <Search />).

<Search /> also handles our API calls to display the search results from the Google API, as well as the API call to save a book to our own API.
- - -
Our <Saved /> component auto-loads all books saved in our MongoDB via `componentWillMount()`. The saved page also allows the user to remove a book from the DB, via button click. <Saved /> handles this command and connects to our API to delete the targeted book. The books listed reload when a book is deleted, thanks to the state of <Search />.
- - -
Lastly, our API methods our found in `API.js`, and we use `axios`. Here we can search a book via title or author (Google API). We can also grab all saved books, add a book, or delete a book (DG Books API).

### The Back-end
Our server uses `express` for setup and `mongoose` for our MongoDB ORM. Our Mongo Models are defined via mongoose schema. We're only using a book model. Routes are setup in our "routes" directory. If no API routes are hit, we send our index.html page. Book routes here communicate to our controller, which holds our DB commands. Our books router allows us to get all books or create a book via `/api/books/` or to delete a book via `/api/books:id`.

Our "booksController" handles our MongoDB commands. Three methods: findAll (db.Book.find()), create (db.Book.create()), and remove (db.Book.findById({}).then(.remove())).
- - -
```
.
|   server.js
|   
|
+---client
|   | 
|   +---public
|   |   |   index.html
|   |   |
|   |   \---images
|   |
|   +---src
|       |   index.js
|       |   index.css
|       |   App.js
|       |   App.css
|       |
|       +---components
|       |
|       +---pages
|       |       Landing.js
|       |       Saved.js
|       |       Search.js
|       |
|       \   utils
|               API.js
|
+---controllers
|   |   booksController.js
|
+---models
|   |   book.js
|   |   index.js
|               
\---routes
    |   index.js
    |   
    \---api
        |   books.js
        \   index.js
```
- - -

### Upgrades



- - -
### Contact

If you have any questions, concerns, or comments, please reach me at

david.weid.2@gmail.com
