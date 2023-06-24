import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const navigate = useNavigate();

  const updateData = async () => {
    console.log(input);
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      method: "Put",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "Application/json"
      }
    });
    result = await result.json();
    if(result){
      navigate("/");
      alert("Product is updated...")
    };
  };
  const [input, setInput] = useState({
    name: "",
    category: "",
    price: "",
    company: "",
    userId
  });

  const params = useParams();

  useEffect(()=>{
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setInput(result)
  }

  const HandleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
    <div className='add'>
      <h1 className='h1add'>Update</h1>
      <div className="details">
      <label className='ladd'>Product Name :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Product Name' value={input.name} name="name" />
    </div>
<hr />

<div className="details">
      <label className='ladd'>price :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add price' value={input.price} name="price" />
      </div>
<hr />

<div className="details">
      <label className='ladd'>Category :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Category' value={input.category} name="category" />
      </div>
<hr />
<div className="details">
      <label className='ladd'>Company :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Company Name' value={input.company} name="company" />
      </div>
<hr />
      <button onClick={updateData} className='btn-add'>Update</button>
    </div>
    </>
  )
}

export default UpdateProduct;