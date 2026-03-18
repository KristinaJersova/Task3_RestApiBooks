import { z } from "zod"
import { Book } from "../models/books.model"

const Book = z.object({
    id: z.number(),

})