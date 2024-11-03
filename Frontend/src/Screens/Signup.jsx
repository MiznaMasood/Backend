import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const HandleSubmit = async() => {
   try{
    const response = await axios.post("http://localhost:5174/register", {name,email,password})
    if(response.data.status){
      alert(response.data.message)
      navigate("/login")
    }else{
      alert(response.data.message)
    }

   }catch(error){
    alert("An error occurred. Please try again.")
   }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Signup</h1>
      <form onSubmit={HandleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)} value={name} style={{ padding: 5 }} type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} style={{ padding: 5 }} type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} style={{ padding: 5 }} type="password" placeholder="Enter your password" required />

        <button type="submit" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Signup
        </button>
      </form>
      <p>Already have an account?</p>
      <Link to='/login'>
      Login
      </Link>
    </div>
  );
}

export default Signup;
