import { Review } from "../models/review.model";

export function getAverageRating(bookId: number, reviews: Review[]): number | null {

    const bookReviews = reviews.filter(r => r.bookId === bookId);

    if (bookReviews.length === 0) {
        return null;
    }

    const sum = bookReviews.reduce((acc, r) => acc + r.rating, 0);

    return sum / bookReviews.length;
}