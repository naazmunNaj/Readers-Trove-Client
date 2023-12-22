/* eslint-disable no-unused-vars */

import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import '@smastrom/react-rating/style.css'

const IndividualCategoryBooks = ({books}) => {
  
    const {_id,img,bookName,categoryName,authorName,quantity,shortDescription,description, rating}= books;

    return (
        <section>
        <div className="m-10">
        <div className="card card-side">
          <figure>
            <img className="w-[800px] h-[400px] rounded-lg object-scale-down" src={img} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <h2 className="card-title">{authorName}</h2>
            <p>{categoryName}</p>
            <p>{shortDescription}</p>
            <p className="font-bold">Available quantity :{quantity}</p>
            <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      readOnly
    />
            <div className="card-actions justify-end">
          
            <Link to={`/allCategoryBooks/:categoryname/${_id}`}>
                <button className="btn  bg-sky-200 text-red-500">Details</button>
                </Link>
                {/* <Link to={`/updateShow/${_id}`}>
                <button className="btn bg-sky-200 text-red-500">Update</button>
                </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default IndividualCategoryBooks;