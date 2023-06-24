import { React, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {

  const auth = JSON.parse(localStorage.getItem("user"));

  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const navigate = useNavigate();

  const updateData = async () => {
    console.log(input);
    let result = await fetch(`http://localhost:5000/profile/${params.id}`,{
      method: "Put",
      body: JSON.stringify(input),
      headers: {
        "Content-type": "Application/json"
      }
    });
    result = await result.json();
    if(result){
      navigate("/");
      alert("Details are updated...")
    };
  };
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    userId
  });

  const params = useParams();

  useEffect(()=>{
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch(`http://localhost:5000/profile/${params.id}`);
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
    <div className='profile-user'>
    <h1>Hello {auth.name}</h1>
    <h3>You Can Update Your Details</h3>
    </div>

    <div className='form'>
    <input className='input-box' type="text" value={input.name} onChange={HandleChange} name='name' placeholder='Change Your Name' />
    <input className='input-box' type="text" value={input.email} onChange={HandleChange} name='email' placeholder='Change Your Email' />
    <input className='input-box' type="password" value={input.password} onChange={HandleChange} name='password' placeholder='Change Password' />
    <button className='btn' type='button' onClick={updateData}>Save</button>
   </div>
    </>
  )
}

export default Profile