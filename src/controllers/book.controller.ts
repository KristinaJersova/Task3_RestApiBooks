import { Request, Response } from "express";
import { books, authors, publishers, genres } from "../data/mock/data";

let nextBookId = books.length + 1;

export function getBooksHandler(req: Request, res: Response) {
  let filteredBooks = [...books];
  const {
    title,
    publishedYear,
    language,
    authorId,
    genreId,
    sort,
    page = "1",
    limit = "10",
  } = req.query;

  if (title) {
    filteredBooks = filteredBooks.filter((b) =>
      b.title.toLowerCase().includes(String(title).toLowerCase())
    );
  }
  if (publishedYear) {
    filteredBooks = filteredBooks.filter(
      (b) => b.publishedYear === Number(publishedYear)
    );
  }
  if (language) {
    filteredBooks = filteredBooks.filter(
      (b) => b.language.toLowerCase() === String(language).toLowerCase()
    );
  }
  if (authorId) {
    filteredBooks = filteredBooks.filter(
      (b) => b.authorId === Number(authorId)
    );
  }
  if (genreId) {
    filteredBooks = filteredBooks.filter((b) =>
      b.genres.includes(Number(genreId))
    );
  }

  if (sort === "title") {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "publishedYear") {
    filteredBooks.sort((a, b) => a.publishedYear - b.publishedYear);
  }

  const pageNum = Number(page);
  const limitNum = Number(limit);
  const start = (pageNum - 1) * limitNum;
  const paginatedBooks = filteredBooks.slice(start, start + limitNum);

  res.json({
    success: true,
    data: paginatedBooks,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total: filteredBooks.length,
    },
  });
}

export function getBookByIdHandler(req: Request, res: Response) {
  const id = Number(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book)
    return res.status(404).json({ success: false, error: "Book not found" });
  res.json({ success: true, data: book });
}

export function createBookHandler(req: Request, res: Response) {
  const newBook = { id: nextBookId++, ...req.body };
  books.push(newBook);
  res.status(201).json({ success: true, data: newBook });
}

export function updateBookHandler(req: Request, res: Response) {
  const id = Number(req.params.id);
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex === -1)
    return res.status(404).json({ success: false, error: "Book not found" });

  books[bookIndex] = { ...books[bookIndex], ...req.body };
  res.json({ success: true, data: books[bookIndex] });
}

export function deleteBookHandler(req: Request, res: Response) {
  const id = Number(req.params.id);
  const index = books.findIndex((b) => b.id === id);
  if (index === -1)
    return res.status(404).json({ success: false, error: "Book not found" });

  books.splice(index, 1);
  res.status(204).send();
}