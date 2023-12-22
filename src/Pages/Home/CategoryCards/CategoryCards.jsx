import { useEffect, useState } from "react";
import SingleCategoryCard from "./SingleCategoryCard";

const CategoryCards = () => {

    const [categories,setCategories] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/bookCategories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
      <>
      <h3>This is our Book categories</h3>
      <h2>categories: {categories.length}</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {
        categories.map(category=><SingleCategoryCard
        key ={category.categoryName}
        category={category}
        >

        </SingleCategoryCard>)
      }
  </div>
      </>
    );
};

export default CategoryCards;