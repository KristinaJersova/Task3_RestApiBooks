import { Genre } from "./genre.model"
export interface Book {
    id: number;
    title: string;
    isbn: string;
    publishedYear: number;
    pageCount: number;
    language: string;
    description: string;
    coverImage?: string | null | undefined;
    authorId: number;
    publisherId: number;
    genres: string;
    createdAt: number;
    updatedAt: number;
}