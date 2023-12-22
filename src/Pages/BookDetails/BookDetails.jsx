/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useBooks from "../../Hooks/useBooks";
import Swal from "sweetalert2";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const BookDetails = () => {
  const [allBooks] = useBooks();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const modalRef = useRef(null);

  const specificBook = allBooks.find((book) => book._id === id);

  const {
    _id,
    img,
    bookName,
    categoryName,
    authorName,
    quantity,
    shortDescription,
    description,
    rating,
  } = specificBook || {};

  const handleAddtoBorrowedBooks = (event) => {
    event.preventDefault();

    console.log("handleAddtoBorrowedBooks executed");

    const form = event.target;
    const name = form.name?.value;
    const returnDate = form.date?.value;
    const email = user?.email;
    console.log(name, returnDate, email);

    const order = {
      name,
      email,
      returnDate,
      _id,
      img,
      bookName,
      categoryName,
      authorName,
      quantity,
      shortDescription,
      description,
      rating,
    };

    console.log(order);

    fetch(`http://localhost:5000/borrowedBooks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
      // body: JSON.stringify({...show, email: user.email,}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Wow...",
            text: "New Book added to your Cart!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      });
    modalRef.current.close();
  };

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Borrow Book
            </button>
            <dialog id="my_modal_1" className="modal" ref={modalRef}>
              <div className="modal-box">
                <form className="card-body" onSubmit={handleAddtoBorrowedBooks}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Return Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Return Date"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="modal-action">
                    <button className="btn btn-primary" type="submit">
                      Borrow
                    </button>
                  </div>
                </form>
              </div>
            </dialog>

            <button className="btn btn-primary">Read</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
