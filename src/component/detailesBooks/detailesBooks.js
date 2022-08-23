import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const DetailesBooks = () => {
    const [Book, setBook] = useState("check")
    const param = useParams();
    const getCards = async () => {
        const cardApi = await axios.get(`https://gutendex.com/books?ids=${param.id}`)
        // setBook(cardApi)
        setBook(cardApi.data.results[0])

    }
    useEffect(() => {
        getCards();
    }, [])
    console.log("its work now",Book )


    
if(Book == "check"){
   return(<>
    <h2>loading....</h2>
    </>)
}else{
    
     return (
        <>
            <div className="  flex flex-wrap flex--Book">
                <div className="m-auto w-full md:w-full  max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between md:flex-row flex-col">
                    <div className="md:flex-shrink-0">
                        <img className="md:w-56 m-auto"
                            src={`${Book.formats["image/jpeg"]}`}
                            alt="A Quiet Place Book poster" />
                    </div>
                    <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
                        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-800 ">{Book.title}</h3>
                        <span className="Book--year text-xl lg:text-sm lg:mb-4">{Book.subjects}</span>
                        <div className="flex-grow">
                            <p className="text-xl md:text-base lg:text-base text-green-700 leading-snug truncate-overflow"> authors: {Book.authors[0].name}</p>
                            <p className="text-xl md:text-base lg:text-base text-red-500 leading-snug truncate-overflow"> languages: {Book.languages[0]}</p>
                            <span className="text-xl md:text-base lg:text-base text-green-700 leading-snug truncate-overflow"> birth year: {Book.authors[0].birth_year} {" : "} death year: {Book.authors[0].death_year}</span>

                        </div>

                        <div className="button-container flex justify-between mb-2">
                            
                            <button className="text-lg mr-4 lg:text-sm text-green-700">download: {Book.download_count}</button>
                            <a target="_blank" href={Book.formats["text/html; charset=utf-8"]} >
                <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700"> read book</button>
        </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="m-2">
                <Link to="/" className=" no-underline   mt-5 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded">Back</Link>
            </div>

        </>
    )
}
    
}

export default DetailesBooks;
