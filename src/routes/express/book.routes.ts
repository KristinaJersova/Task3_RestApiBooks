import { Router } from "express";
<<<<<<< HEAD:src/routes/express/book.routes.ts
import * as bookController from "../../controllers/book.controller.js";
=======
import {createBookHandler,getBooksHandler,getBookByIdHandler,updateBookHandler,deleteBookHandler,} from "../../src/controllers/book.controller";

>>>>>>> 51bf02a21ee24d0149984f726bdefb4cfa81af6d:src/routes/book.routes.ts
const router = Router();

router.post("/api/v1/books", createBookHandler);
router.get("/api/v1/books", getBooksHandler);
router.get("/api/v1/books/:id", getBookByIdHandler);
router.put("/api/v1/books/:id", updateBookHandler);
router.delete("/api/v1/books/:id", deleteBookHandler);

export default router;