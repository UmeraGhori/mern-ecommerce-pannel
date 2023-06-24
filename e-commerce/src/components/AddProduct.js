import {React, useState} from 'react'

const AddProduct = () => {
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const [error, setError] = useState(false)
  

  const collectData = async () => {
    if(!input.name || !input.category || !input.price || !input.company){
      setError(true)
      return false;
    }

  let result = await fetch("http://localhost:5000/addProduct", {
    method: "post",
    body: JSON.stringify(input),
    headers: {
      "Content-type": "application/json"
    } 
  });
  result = await result.json();
  console.log(result);
  alert("Product is added in your List")
  }

  const [input, setInput] = useState({
    name: "",
    category: "",
    price: "",
    company: "",
    userId
  })

  const HandleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    <div className='add'>
      <h1 className='h1add'>Add your Products Here</h1>
      <div className="details">
      <label className='ladd'>Product Name :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Product Name' value={input.name} name="name" />
    </div>
    {error && input.name=="" && <span className='span-box'>Enter Valid Name</span>}
<hr />

<div className="details">
      <label className='ladd'>price :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add price' value={input.price} name="price" />
      </div>
      {error && input.price=="" && <span className='span-box'>Enter Valid Price</span>}
<hr />

<div className="details">
      <label className='ladd'>Category :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Category' value={input.category} name="category" />
      </div>
      {error && input.category=="" && <span className='span-box'>Enter Valid Category</span>}
<hr />
<div className="details">
      <label className='ladd'>Company :</label>
      <input className="iadd" type="text" onChange={HandleChange} placeholder='Add Company Name' value={input.company} name="company" />
      </div>
      {error && input.company=="" && <span className='span-box'>Enter Valid Company</span>}
<hr />
      <button onClick={collectData} className='btn-add'>Add Product</button>
    </div>
    </>
  )
}

export default AddProduct