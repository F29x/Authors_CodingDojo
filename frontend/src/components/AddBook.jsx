import { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dataSender = async () => {
        if (!title || !author || !year) {
            setErrorMessage('All fields must be filled');
            return;
        }

        try {
            await axios.post('http://localhost:8080/books', {
                title: title,
                author: author,
                publishedYear: year,
            });
            alert('Book Posted');
            console.log('Book Posted:', title, author, year);
            setTitle('');
            setAuthor('');
            setYear('');
            setErrorMessage(''); 
        } catch (error) {
            console.error('Error posting book:', error.response ? error.response.data : error.message);
        }
    };

    console.log('Rendering AddBook:', title, author, year); 

    return (
        <div>
            <h1>Add a New Book</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className="field">
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        setErrorMessage(''); 
                    }}
                />
                <input
                    type="text"
                    placeholder="author"
                    value={author}
                    onChange={(e) => {
                        setAuthor(e.target.value);
                        setErrorMessage(''); 
                    }}
                />
                <input
                    type="number"
                    placeholder="published year"
                    value={year}
                    onChange={(e) => {
                        setYear(e.target.value);
                        setErrorMessage(''); 
                    }}
                />
                <button onClick={dataSender}>Send Data</button>
            </div>
        </div>
    );
};

export default AddBook;
