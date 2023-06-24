import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let result = await fetch("http://localhost:5000/products");
      result = await result.json();
      setData(result);
  }
  console.log(data);

  const DeleteData = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if(result){
      getData();
    }
  }
  const SearchHandle = async (event) => {
    let key = event.target.value;
    if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if(result){
      setData(result);
    }
    } else{
      getData();
    }
  }
  return (
  <>
  <div className='product-list'>
    <h1>Product List</h1>
    <input type="text" placeholder='Search Product' className='searchProduct' onChange={SearchHandle} />
    <ul>
      <li>S.No.</li>
      <li>Name</li>
      <li>Price</li>
      <li>Category</li>
      <li>Operation</li>
    </ul>
  { data.length>0 ? data.map((item, index)=>
    <ul key={item._id}>
    <li>{index+1}</li>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.category}</li>
    <li><button onClick={() => DeleteData(item._id)}>Delete</button>
    <Link to={"/update/"+item._id}>Edit</Link> </li>
  </ul>
  ) : <h1>No Result Found</h1>
  }
  </div>

  </>
  )
}

export default Products;