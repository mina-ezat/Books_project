import axios from "axios";
import { ALLBooks, BooksApi } from "../types/BooksTypes";
import { useSelector, useDispatch } from "react-redux";

 export const getAllBooks = () => {
    return async (dispatch) => {
        const res = await axios.get(BooksApi);

        dispatch({ type: ALLBooks, data: res.data.results, pages: res.data.total_pages })
    }

}

export const getBooksSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://gutendex.com/books?search=${word}`);
        dispatch({ type: ALLBooks, data: res.data.results, pages: res.data.total_pages })
    }

}
export const getPages = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1dac39336de827d7271a72ce7ca9b51f&language=en-US&page=${word}`);
        dispatch({ type: ALLBooks, data: res.data.results, pages: res.data.total_pages })
    }
}

export const DetailesMovie = (word) => {
    return async (dispatch) => {
        const res = await axios.get(` https://gutendex.com/books?ids=${word}`);
        dispatch({ type: ALLBooks, data: res.data.results, pages: res.data.total_pages })
    }
}
