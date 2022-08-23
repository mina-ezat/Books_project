import React from "react";
import { getAllBooks, getBooksSearch } from "../redux/action/BooksAction";
import { useDispatch } from "react-redux";

function Navbar() {
    const dispatch = useDispatch()
    const onSearch = (word) => {
        search(word)
    };
    const search = async (words) => {
        if (words == "") {
            dispatch(getAllBooks)
        } else {
            dispatch(getBooksSearch(words))
        }
    }
    return (
        <>
            <nav className="flex sm:justify-center space-x-4 py-2 px-4 bg-blue-500  font-semibold ">
                <label className="w-1/4 relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input onChange={(stat) => onSearch(stat.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
            </nav>
        </>
    )
}
export default Navbar;