import ResisterPage from "./ResisterPage"
import React,{useState, useEffect} from "react";

function LogInPage(){
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

    };

    useEffect(()=>{
        if(Object.keys(formErrors).length ===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate=(values)=>{
        const errors={};
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
        <div> {redirect==null && <div className="loginpage">
            <form onSubmit={handleSubmit}>
                <div className="forminside">
                <h1>LogIn form</h1>
                <div></div>
                <div>
                    <div>
                        <lable>Username :</lable><br />
                        <input type="text"  name="username" placeholder="username" value={formValues.username} onChange={handleChange}/>
                    </div>
                    <p className="error">{formErrors.username}</p>
                    <div>
                        <label htmlFor="">Email :</label><br />
                        <input type="text" name="email"  placeholder="Email" value={formValues.email} onChange={handleChange}/>
                    </div>
                    <p className="error">{formErrors.email}</p>
                    <div>
                        <label htmlFor="">Password :</label><br />
                        <input type="password" name="password"  placeholder="Password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <p className="error">{formErrors.password}</p>
                    <button id="btn">Submit</button>

                    <h2>or</h2>

                    <button id="btn1" onClick={()=>{setRedirect("redirect")}}>Resister</button>

                </div>
                </div>
            </form>
            </div>}
            {redirect==="redirect" && <ResisterPage/>}
        </div>
    )
}

export default LogInPage;
