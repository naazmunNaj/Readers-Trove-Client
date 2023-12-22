/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyBorrowedBooks from "./MyBorrowedBooks";


const BorrowedBooks = () => {

    const myBorrowedBooks =useLoaderData();
    const [myBooks, setMyBooks] = useState(myBorrowedBooks);
    const {_id,img,bookName,categoryName,authorName,quantity,shortDescription,description, rating}= myBooks || {};


    return (
        <>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {
            myBooks.map((myBook)=><MyBorrowedBooks
            key={myBook._id}
            myBook= {myBook}
            myBooks={myBooks}
            setMyBooks={setMyBooks}
            ></MyBorrowedBooks>)
         }
        </div>
         </>
    );
};

export default BorrowedBooks;