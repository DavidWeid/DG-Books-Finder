const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Route for "/api/books/"
// GET all books, or POST to create a book
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Route for "/api/books/:id"
// DELETE to remove a book by id
router.route("/:id").delete(booksController.remove);

module.exports = router;
