import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function CardBooks(data) {
    return (
        <>
            <Link className="no-underline" to={`/books/${data.data.id}`}>
                <div key={data.data.id} className="py-4">
                    <div style={{ backgroundImage: `url(${data.data.formats["image/jpeg"]})` }} className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-start    items-center  mx-auto content-div" >
                        <div>
                            <div className="w-full image-cover rounded-t-md" >
                                <div className="p-2  w-18 h-18 text-center bg-green-700 rounded-full text-white float-right fd-cl   group-hover:bg-green-0">

                                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> {data.data.download_count}</span>
                                    <span className="text-xs tracking-wide  uppercase block font-sans">Down</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <h4 className=" text-center text-blue-700 text-opacity-100" max={30}>{data.data.title}</h4>



            </Link>
        </>
    )
}
export default CardBooks;