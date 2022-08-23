import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardBooks from "../cardBooks/cardBooks";
import PaginatedBooks from "../paginateBooks/PaginateBooks";
import { getAllBooks } from "../redux/action/BooksAction";
const BooksList = () => {
    const dispach = useDispatch()

    const [Books, setBooks] = useState([])

    useEffect(() => {
        dispach(getAllBooks())
    }, [])
    const AllBooks = useSelector((state) => state.Books)
    useEffect(() => {
        setBooks(AllBooks)
    }, [AllBooks])
    return (<>
        <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
            {
                Books.map((item) => {

                    return <div key={item.id}> <CardBooks data={item} /></div>
                })
            }
        </div>
        <div className="container mx-auto">
            < PaginatedBooks itemsPerPage={4} />

        </div>

    </>)

}
export default BooksList;