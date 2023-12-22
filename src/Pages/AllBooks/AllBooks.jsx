/* eslint-disable no-unused-vars */
// import { useLoaderData } from "react-router-dom";
import AllCategoryBooks from "./AllCategoryBooks";
import { useEffect, useState } from "react";
import useBooks from "../../Hooks/useBooks";


const AllBooks = () => {

    // const allBooks = useLoaderData();

    // const [allBooks,setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/allCategoryBooks')
    //     .then(res=>res.json())
    //     .then(data=>setAllBooks(data))
    // },[])


    const [allBooks] =useBooks();

    // console.log(allBooks);
    return (
        <>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {
              allBooks.map((books)=><AllCategoryBooks
              key={books._id}
              books= {books}
              ></AllCategoryBooks>)
          }
        </div>
               </>
    );
};

export default AllBooks;