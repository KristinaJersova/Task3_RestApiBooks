import prisma from "../lib/prisma";

export interface ReviewInput {
  bookId: number;
  userName: string;
  rating: number;
  comment: string;
}

export async function getReviewsByBook(bookId: number) {
  return prisma.review.findMany({
    where: { bookId },
    orderBy: { createdAt: "desc" },
  });
}

export async function createReview(data: ReviewInput) {
  return prisma.review.create({
    data,
  });
}

export async function deleteReview(reviewId: number) {
  return prisma.review.delete({
    where: { id: reviewId },
  });
}

export async function updateReview(reviewId: number, data: Partial<ReviewInput>) {
  return prisma.review.update({
    where: { id: reviewId },
    data,
  });
}

export async function getBookAverageRating(bookId: number) {
  const result = await prisma.review.aggregate({
    where: { bookId },
    _avg: { rating: true },
  });
  return result._avg.rating ?? 0;
}