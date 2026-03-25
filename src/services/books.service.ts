import prisma from "../lib/prisma";

export interface BookInput {
  title: string;
  publishedYear: number;
  authorIds?: number[];
}

export async function getAllBooks() {
  return prisma.book.findMany({
    include: {
      authors: {
        include: {
          author: true,
        },
      },
    },
    orderBy: {
      title: "asc",
    },
  });
}

export async function getBookById(bookId: number) {
  return prisma.book.findUnique({
    where: { id: bookId },
    include: {
      authors: {
        include: { author: true },
      },
    },
  });
}

export async function createBook(data: BookInput) {
  const { authorIds, ...bookData } = data;

  return prisma.book.create({
    data: {
      ...bookData,
      authors: authorIds
        ? {
            create: authorIds.map((authorId) => ({ authorId })),
          }
        : undefined,
    },
    include: {
      authors: { include: { author: true } },
    },
  });
}

export async function updateBook(bookId: number, data: BookInput) {
  const { authorIds, ...bookData } = data;

  return prisma.book.update({
    where: { id: bookId },
    data: {
      ...bookData,
      authors: authorIds
        ? {
            deleteMany: {},
            create: authorIds.map((authorId) => ({ authorId })),
          }
        : undefined,
    },
    include: {
      authors: { include: { author: true } },
    },
  });
}

export async function deleteBook(bookId: number) {
  return prisma.book.delete({
    where: { id: bookId },
  });
}

export async function getAverageRating(bookId: number) {
  const result = await prisma.review.aggregate({
    where: { bookId },
    _avg: { rating: true },
  });
  return result._avg.rating ?? 0;
}