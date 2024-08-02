
export const checkValidate=(email,password)=>{

    const isEmailValid= /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);


    const isPasswordValid= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid && !isPasswordValid){
        return "Both Email and Password is not valid"
    }


    if(!isEmailValid){
        return "Email Id is not valid";
    }
    if(!isPasswordValid){
        return "Password is not valid"
    }
  

    return null;
}