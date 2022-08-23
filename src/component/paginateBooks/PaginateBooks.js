import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks, getBooksSearch, getPages } from '../redux/action/BooksAction';
import "./style.css"
// Example items, to simulate fetching from another resources.

function PaginatedBooks({ itemsPerPage }) {
    const [pageCounts, setPageCounts] = useState(0);
    const dispach = useDispatch()
    const pages = useSelector((state) => state.pageCount)

    useEffect(() => {
        setPageCounts(pages)

    })



    // const getPAge = async (page) => {
    //     setPageCount(page)
    // }

    // Invoke when user click to request another page.
    const handlePageClick = (data) => {
        dispach(getPages(data.selected + 1));
    };


    return (
        <>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCounts}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
export default PaginatedBooks;