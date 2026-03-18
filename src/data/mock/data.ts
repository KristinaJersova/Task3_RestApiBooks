import { Book } from "../../models/books.model";
import { Author } from "../../models/author.model";
import { Publisher } from "../../models/publisher.model";
import { Review } from "../../models/review.model";
import { Genre } from "../../models/genre.model";

import { faker } from "@faker-js/faker";

export const genres: Genre[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: faker.book.genre()
}));

export const publishers: Publisher[] = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  name: faker.company.name(),
  country: faker.location.country(),
  foundedYear: faker.number.int({ min: 1900, max: 2020 }),
  website: faker.internet.url(),
  createdAt: faker.date.past()
}));

export const authors: Author[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthYear: faker.number.int({ min: 1940, max: 2000 }),
  nationality: faker.location.country(),
  biography: faker.lorem.paragraph(),
  createdAt: faker.date.past()
}));

export const book: Book[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: faker.book.title(),
  isbn: faker.commerce.isbn(),
  publishedYear: faker.number.int({ min: 1980, max: 2024 }),
  pageCount: faker.number.int({ min: 100, max: 900 }),
  language: faker.location.language(),
  description: faker.lorem.paragraph(),
  coverImage: faker.image.urlLoremFlickr({ category: "book" }),
  authorId: faker.helpers.arrayElement(authors).id,
  publisherId: faker.helpers.arrayElement(publishers).id,
  genres: faker.helpers.arrayElements(
    genres.map(g => g.id),
    { min: 1, max: 3 }
  ),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent()
}));

export const reviews: Review[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  bookId: faker.helpers.arrayElement(book).id,
  userName: faker.internet.username(),
  rating: faker.number.int({ min: 1, max: 5 }),
  comment: faker.lorem.sentence(),
  createdAt: faker.date.recent()
}));

/**
* Generates a single fake book using faker.
*
* @param id Unique identifier for the book.
* @returns A fake `Book` instance.
*/
function generateBook(id: number): Book {
    return {
        id,
        title: faker.book.title(),
        publishedYear: faker.date.past({ years: 50 }).getFullYear(),
        isbn: faker.commerce.isbn(),
        pageCount: faker.number.int(),
        language: faker.string.alpha(),
        description: faker.string.alpha(),
        coverImage: faker.image.avatar(),
        authorId: faker.number.int(),
        publisherId: faker.number.int(),
        genres: faker.string.alpha(),
        createdAt: faker.date.past({ years: 50 }).getFullYear(),
        updatedAt: faker.date.past({ years: 50 }).getFullYear(),
    }
}
/**
* Generates an array of fake books.
*
* @param count Number of books to generate.
* @returns Array of fake `Book` instances.
*/
function generateBooks(count: number): Book[] {
    return Array.from({ length: count }, (_, index) => generateBook(index + 1));
}
/**
* Generates a seeded array of fake books.
* Useful for tests where data must be stable.
*
* @param count Number of books to generate.
* @param seed Seed value for faker (default 42).
* @returns Array of fake `Book` instances generated with a fixed seed.
*/
function generateSeededBooks(count: number, seed: number = 42): Book[] {
    faker.seed(seed);
    const books = Array.from({ length: count }, (_, index) => generateBook(index + 1));
    faker.seed();
    return books;
}
// Genereeri 20 raamatut
export let books: Book[] = generateBooks(20);