import { Router } from "express";
import * as bookController from "../../controllers/book.controller";

const router = Router();

router.get("/books", bookController.getBooksHandler);
router.get("/books/:id", bookController.getBookByIdHandler);
router.post("/books", bookController.createBookHandler);
router.put("/books/:id", bookController.updateBookHandler);
router.delete("/books/:id", bookController.deleteBookHandler);

router.post("/books/:bookId/reviews", bookController.createReviewHandler);
router.get("/books/:bookId/reviews", bookController.getReviewsByBookHandler);
router.get("/books/:id/average-rating", bookController.getAverageRatingHandler);

export default router;