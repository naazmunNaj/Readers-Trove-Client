/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const SingleCategoryCard = ({ category }) => {
  const { categoryName, image } = category;
  return (
    <>
      <div className="card image-full border-8 border-solid border-blue-200 bg-slate-400">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="font-bold text-3xl text-blue-400">
            {categoryName}
          </h2>
         <Link to={`/allCategoryBooks/${categoryName}`}><button className="btn btn-outline btn-info">Show Books</button></Link>
        </div>
        
      </div>
    </>
  );
};

export default SingleCategoryCard;
