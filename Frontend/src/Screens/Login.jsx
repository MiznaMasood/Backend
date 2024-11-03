import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const HandleSubmit = async() => {
  try{
    const response = await axios.post("http://localhost:5174/login")
    if(response.data.status){
      alert("Login successful!🙂")
      navigate("/dashboard")
    }else{
      alert(response.data.message)
    }
  }catch (error){
    alert("An error occurred. Please try again.");

  }
   
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={HandleSubmit}  style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email}  style={{padding:5}} type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} style={{padding:5}} type="password" placeholder="Enter your password" required />

        <button type="submit" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

