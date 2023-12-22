/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";


const MyBorrowedBooks = ({myBook, myBooks, setMyBooks}) => {
     
    const {_id,img,bookName,categoryName,authorName,quantity,shortDescription,description, rating}= myBook || {};


    const handleDelete =(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
        
            fetch(`http://localhost:5000/borrowedBooks/${_id}`, {
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount>0)
                {
                  Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
             
                }
                const remaining = myBooks.filter( book => book._id !==_id)
                setMyBooks(remaining);
            })
            }
          })
           }


    return (
        <>
        <section>
        <div className="m-10">
            <div className="card card-side">
              <figure>
                <img className="w-[400px] h-[400px]" src={img} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <h2 className="card-title">{authorName}</h2>
                <p>{categoryName}</p>
                <p>{shortDescription}</p>
                <p className="font-bold">{quantity}</p>
                <p>{shortDescription}</p>
                <p>Rating {rating}</p>
                <div className="card-actions justify-end">
              
                <button onClick={() => handleDelete(_id)} className="btn bg-red-400 text-black">
                    Return Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
              </>
    );
};

export default MyBorrowedBooks;