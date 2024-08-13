import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context); 
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const inputValue = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const submitForm = async(e) => {
        e.preventDefault();
        console.log(login);
        const successLogin= await actions.login(login.email, login.password);
        setLogin({
            email: "",
            password: ""
        });
        if(successLogin===true){
            navigate("/homeUser");
        }

    };
    return (
        <div className="container login-box mt-5 mb-5">
            <h1 className="text-center">Login</h1>
            <form onSubmit={(event)=>submitForm(event)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email"
                     className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp"
                    onChange={inputValue}
                    name="email"
                    value={login.email}
                      />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    onChange={inputValue}
                    name="password"
                    value={login.password}
                    />
                </div>
                
                <button type="submit" className="btn btn-warning">
                    Submit
                </button>
            </form>
        </div>
    );
};    