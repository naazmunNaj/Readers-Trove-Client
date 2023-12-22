/* eslint-disable no-unused-vars */


const AllCategoryBooks = ({books}) => {

    // console.log(Object.keys(books).join(","));

    const {_id,img,bookName,categoryName,authorName,quantity,shortDescription,description, rating}= books;

// console.log(books);
    return (
    <>
    <div className="card bg-gray-200 shadow-xl">
  <figure><img className="w-[300px] h-[200px]" src={img} alt="Shoes" /></figure>
  <div className="">
    <h2 className="">
     <p className="font-bold text-red-500 text-2xl"> {bookName}</p>
      <p>{authorName}</p>
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p>{shortDescription.slice(0,60)}...</p>
    <div className="justify-end">
      {/* <div className="badge badge-outline">Fashion</div>  */}
     <button className="btn btn-error">Details</button>
    </div>
  </div>
</div>
    </>
    );
};

export default AllCategoryBooks;