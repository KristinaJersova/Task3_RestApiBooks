import { z } from "zod";
import { Book } from "../models/books.model";
import { Author } from "../models/author.model";
import { Publisher } from "../models/publisher.model";
import { Review } from "../models/review.model";
import { Genre } from "../models/genre.model";
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5000000;



export const bookSchema = z.object({
    id: z.number(),
    title: z.string().uppercase(),
    isbn: z.string(),
    publishedYear: z.number(),
    pageCount: z.number(),
    language: z.string(),
    description: z.string().uppercase(),
    coverImage: z.url(),
    authorId: z.string(),
    publisherId: z.string(),
    genres: z.array(z.string()),
    createdAt: z.iso.date(),
    updatedAt: z.iso.date(),
});

export const reviewSchema = z.object({
  userName: z.string().uppercase(),
  rating: z.number().min(1).max(5),
  comment: z.string()
});

export const publisherSchema = z.object({
  id: z.number(),
  name: z.string().uppercase(),
  country: z.string(),
  website: z.string(),
  createdAt: z.iso.date(),
});

export const authorSchema = z.object ({
    id: z.number(),
    firstName: z.string().uppercase(),
    lastName: z.string().uppercase(),
    birthYear: z.number(),
    nationality: z.string(),
    biography: z.string(),
    createdAt: z.iso.date(),
});

export const genreSchema = z.object ({
    id: z.number(),
    name: z.string().uppercase(),
});
