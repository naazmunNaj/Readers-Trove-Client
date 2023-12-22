/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useBooks = () => {
    const [allBooks,setAllBooks] = useState([]);
    const [loading, setLoading] =useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/allCategoryBooks')
        .then(res=>res.json())
        .then(data=>{
            setAllBooks(data)
            setLoading(false)
        })

    },[])
    return [allBooks, loading]
};

export default useBooks;