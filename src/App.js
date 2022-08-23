import './App.css';
import Navbar from './component/navbar/navbar';
import React from 'react';
import { getAllBooks } from "./component/redux/action/BooksAction.js"
import BooksList from './component/BooksList/BooksList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailesBooks from './component/detailesBooks/detailesBooks';
import { connect } from 'react-redux';

class App extends React.Component {


  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<BooksList />} />

            <Route path="/books/:id" element={<DetailesBooks />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    Books: () => dispatch(getAllBooks())
  }
}
export default connect(null, mapDispatchToProps)(App)
