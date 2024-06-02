
import { Book } from '../models/user.model.js';





export const createBook= async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
        ) {
            return res.status(400).send({ message: "Send all fields required" });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
        };

        const book = await Book.create(newBook);
        res.status(201).send({ message: "Book created successfully",  book });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Server Error" });
    }
};

export const getAllBooks = async (req,res)=>{
    try {
        const books = await Book.find({})
         res.status(200).json({
            count : books.length,
            data: books
         })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Server Error" });
    }
};
 export const getBookbyId = async (req,res)=>{
    try {
        const{id} = req.params
        const book = await Book.findById(id)
        console.log(book)
         res.status(200).json(book)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Server Error" });
    }
};


export const updateBook = async (req,res)=>{
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishedYear
        ) {
            return res.status(400).send({ message: "Send all fields required" });
        }
    const {id} =req.params
    const result = await Book.findByIdAndUpdate(id,req.body)
    if(!result){
        return res.status(400).json({message:"Book not found !"})
    }
    res.status(200).send({message:"Book updated sucessfully !!!"})

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Server Error" }); 
    }
}

export const deleteBook = async (req,res)=>{
    try {
        const {id}= req.params;
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(400).json({message:"Book not found !"})
        }
        res.status(201).send({message:"Book deleted !!!"})
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Server Error" }); 
    }
}


