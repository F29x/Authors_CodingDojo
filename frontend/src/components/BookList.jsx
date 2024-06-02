import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/books/');
                setBooks(response.data.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Books Library</h1>
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Published Year: {book.publishedYear}</p>
                        <Link to={`/update-book/${book._id}`}>Edit</Link>
                        <Link to={`/delete-book/${book._id}`} style={{ marginLeft: '10px' }}>Delete</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;