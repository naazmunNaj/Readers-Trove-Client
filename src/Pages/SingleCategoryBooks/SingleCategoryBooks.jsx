/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import IndividualCategoryBooks from "../IndividualCategoryBooks/IndividualCategoryBooks";
import useBooks from "../../Hooks/useBooks";


const SingleCategoryBooks = () => {
  const { categoryname } = useParams();
  // const allBooks = useLoaderData();

  
  const [allBooks] =useBooks();


  const filteredBooks = allBooks.filter(
    (books) => books.categoryName === categoryname 
  );
  
  // console.log(filteredBooks);

  const {_id,img,bookName,categoryName,authorName,quantity,shortDescription,description, rating}= filteredBooks;


  return (
    <>
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredBooks.map((books) => (
            <IndividualCategoryBooks
              key={books._id}
              books={books}
            ></IndividualCategoryBooks>
          ))}
        </div>
      </section>
    </>
  );
};

export default SingleCategoryBooks;
