import { Router } from "express";
import {createBookHandler,getBooksHandler,getBookByIdHandler,updateBookHandler,deleteBookHandler,} from "../../src/controllers/book.controller";

const router = Router();

router.post("/api/v1/books", createBookHandler);
router.get("/api/v1/books", getBooksHandler);
router.get("/api/v1/books/:id", getBookByIdHandler);
router.put("/api/v1/books/:id", updateBookHandler);
router.delete("/api/v1/books/:id", deleteBookHandler);

export default router;