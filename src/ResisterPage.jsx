import React,{useState, useEffect} from "react";
import Home from "./Home";

function Resisterpage(){
    const [formValues, setFormValues]=useState({username:"", email:"", password:""})
    const[formErrors, setFormErrors]=useState({});
    const[isSubmit, setIsSubmit]=useState(false);
    const[redirect, setRedirect]=useState(null)

    const handleChange=({target:{name,value}})=>{
        setFormValues({...formValues, [name]:value});

    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setRedirect("redirect")

    };

    useEffect(()=>{
        if(Object.keys(formErrors).length ===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate=(values)=>{
        const errors={};
        
        if(!values.username){
            errors.username="username is required ";  
        }
        if(!values.email){
            errors.email="email is required";  
        }
        if(!values.password){
            errors.password="password is required ";  
        }else if(values.password<4){
            errors.password="password must be more then 4 characters"
        }
        return errors;
    };
    return (
        <div>{redirect==null && <div className="loginpage">
            <form onSubmit={handleSubmit}>
                <div className="forminside">
                <h1>Register form</h1>
                <div></div>
                <div>
                    <div>
                        <lable>Username :</lable>
                        <input type="text"  name="username" placeholder="username" value={formValues.username} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.username}</p>
                    <div>
                        <label htmlFor="">Email :</label>
                        <input type="text" name="email"  placeholder="Email" value={formValues.email} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.email}</p>
                    <div>
                        <label htmlFor="">Password :</label>
                        <input type="password" name="password"  placeholder="Password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.password}</p>

                    <div>
                        <label htmlFor="">Confirm Password :</label>
                        <input type="password" name="password"  placeholder="Password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.password}</p>
                    <div>
                        <lable>First Name :</lable>
                        <input type="text"  name="username" placeholder="username" value={formValues.username} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.username}</p>

                    <div>
                        <lable>Last Name :</lable>
                        <input type="text"  name="username" placeholder="username" value={formValues.username} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.username}</p>

                    
                    




                    <button id="btn">Register</button>
                   

                </div>
                </div>


            </form>
            </div>}
            {redirect==="redirect" && <Home/>}
        </div>
    )
}

export default Resisterpage;
