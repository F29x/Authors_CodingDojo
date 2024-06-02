import express from 'express'
import { createBook,deleteBook,getAllBooks,getBookbyId,updateBook } from '../controllers/books.Controller.js'
const router= express.Router();

router.get('/books',getAllBooks)
router.get('/books/:id',getBookbyId)
router.post('/books',createBook)
router.put('/books/:id',updateBook)
router.delete('/books/:id',deleteBook)

export default router