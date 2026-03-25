import { Request, Response } from "express";
import { reviews, books } from "../data/mock/data";

let nextReviewId = reviews.length + 1;

export function createReviewHandler(req: Request, res: Response) {
  const bookId = Number(req.params.bookId);
  if (!books.find((b) => b.id === bookId)) {
    return res.status(404).json({ success: false, error: "Book not found" });
  }
  const newReview = { id: nextReviewId++, bookId, ...req.body };
  reviews.push(newReview);
  res.status(201).json({ success: true, data: newReview });
}

export function getReviewsByBookHandler(req: Request, res: Response) {
  const bookId = Number(req.params.bookId);
  const bookReviews = reviews.filter((r) => r.bookId === bookId);
  res.json({ success: true, data: bookReviews });
}

export function getAverageRatingHandler(req: Request, res: Response) {
  const bookId = Number(req.params.id);
  const bookReviews = reviews.filter((r) => r.bookId === bookId);

  if (bookReviews.length === 0) {
    return res.json({ success: true, data: { averageRating: null } });
  }

  const averageRating =
    bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length;

  res.json({ success: true, data: { averageRating } });
}