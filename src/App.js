import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';
import { NotFound } from './pages/NotFound';
import { BooksLinks } from './BooksLinks';

function App() {
  return (

    <>


      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/books'>Books List</Link>
          </li>


        </ul>

      </nav>

      <Routes>
        <Route element={<BooksLinks />}>
          <Route path='/' element={<Home />} />

        </Route>

        <Route path='/books' element={<BooksLinks />}>
          <Route element={<BooksLinks />}>
            <Route path=':id' element={<Book />} />
            <Route index element={<BookList />} />
            <Route path='new' element={<NewBook />} />

          </Route>


        </Route>

        <Route path='*' element={<NotFound />} />





        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}

      </Routes>
    </>


  );
}

export default App;
