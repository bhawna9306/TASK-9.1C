import React ,{useState} from "react";
import './login.css'
import {Link } from 'react-router-dom';
import {signemailandpass , logout} from './utils/firebase'
import { useNavigate} from 'react-router-dom'


function Login(){
    const history = useNavigate();
    
    
    const login =async (event) =>{
        event.preventDefault();
        
        try{ const  response = await signemailandpass (email, password);
            
            console.log(response)
            history("/")
            
           
        }
        catch(error){
        alert('error in login' , error.message)          
        } 
              
        }
    const [contact, setContact] = useState({
 
        email:'',
        password:'',    
    })
    const {email, password} = contact;
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
const signout= async()=>{
    try {
     await logout(); 
     history("/");
     alert('you are logged out')
    }
    catch(e){
        console.log(e.message)
    }


    }




return(
<div className="login">
<Link to = '/Sign'><button className="signup">Sign Up</button></Link>
<button className="signup" onClick={signout}>signout</button>

<h2 style={{float:"left"} } >Your email</h2>
<input type="text" className="email2" name="email" value={contact.email} onChange={handleChange}></input>

<h2 style={{float:"left"}}>Your password</h2>
<input type="password" className="password2" name="password" value={contact.password} onChange={handleChange}></input>

<button className="login2" onClick={login}>Login</button>



</div>
)
}



export default Login