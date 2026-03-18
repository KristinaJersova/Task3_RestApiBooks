import { z } from "zod"
import { Book } from "../models/books.model"

const books = z.object({
    id: z.number(),

})

export const bookSchema = z.object({
  title: z.string(),
  isbn: z.string(),
  publishedYear: z.number(),
  pageCount: z.number(),
  language: z.string(),
  description: z.string(),
  authorId: z.string(),
  publisherId: z.string(),
  genres: z.array(z.string())
});

export const reviewSchema = z.object({
  userName: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string()
});

export const publisherSchema = z.object({
  id: z.number(),
  bookId: z.number(),
  userName: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  createdAt: z.ZodDate,
});