import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const[isSignIn,setIsSignIn]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();


    const email=useRef(null);
    const password=useRef(null);

   

    const toggleSignInFOrm=()=>{
setIsSignIn(!isSignIn);
    }
    const handleButtonClick=()=>{
        //validate the form data

       // checkValidate(email,password)
       console.log(email.current.value);
       console.log(password.current.value);
       const mes=checkValidate(email.current.value,password.current.value)
       setErrorMessage(mes);
       if(mes) return;

       if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-" +errorMessage)
          // ..
        });
       }
       else{
        
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage)

  });

       }

   



    }

    return (
    
    <div>
       <Header/>
       <div className="absolute">
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
       alt="back-ground"/>
</div>
<form  onSubmit ={ (e)=> e.preventDefault()}
className=" w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60">
    <h1 className="font-bold text-3xl py-4 ">{isSignIn ? "Sign In":"Sign Up"}</h1>
    {!isSignIn && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full  bg-gray-500 rounded-lg"/>)}
    {!isSignIn && (<input type="text" placeholder="Mobile Number" className="p-4 my-4 w-full  bg-gray-500 rounded-lg"/>)}
    <input ref ={email} type="text" placeholder="Email" className="p-4 my-4 w-full  bg-gray-500 rounded-lg"/>
    <input ref={password}  type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-500 rounded-lg"/>
    <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
    <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignIn? "Sign In":"Sign Up"}</button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInFOrm}>{isSignIn? "New to NetFlix? Sign Up Now" : "Already registered ? Sign In Now"}</p>
</form>
    </div>
    )
   
}
export default Login;