
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/books/${id}`);
                const book = response.data;
                console.log(response.data)
                setTitle(book.title)
                setAuthor(book.author);
                setYear(book.publishedYear);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBook();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/books/${id}`, {
                title : title,
                author: author,
                publishedYear: year,
            });
            alert("Book Updated");
            setAuthor('')
            setTitle('')
            setYear('')
        } catch (error) {
            console.error('Error updating book:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1>Update Book</h1>
            <div className="field">
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                <input type="number" placeholder="published year" value={year} onChange={(e) => setYear(e.target.value)} />
                <button onClick={handleUpdate}>Update Book</button>
            </div>
        </div>
    );
};

export default UpdateBook;
