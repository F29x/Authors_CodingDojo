
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/books/${id}`);
            alert("Book Deleted");
            navigate('/');  
        } catch (error) {
            console.error('Error deleting book:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1>Delete Book</h1>
            <button onClick={handleDelete}>Delete Book</button>
        </div>
    );
};

export default DeleteBook;
