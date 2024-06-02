
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BooksList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBooks';

function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Books List</Link>
                        </li>
                        <li>
                            <Link to="/add-book">Add Book</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<BooksList />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/update-book/:id" element={<UpdateBook />} />
                    <Route path="/delete-book/:id" element={<DeleteBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
