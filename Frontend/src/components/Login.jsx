import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch,
    } = useForm();

    const password = watch("password");

    const handleRedirect = () => {
        navigate("/")
    }

    const handleLogin = async (data) => {
        try{
            console.log(data);
            const response = await axios.post("https://expenso-osyg.onrender.com/api/v1/auth/login",
                {
                    email: data.email,
                    password: data.password
                }
            );

            const token = response.data.data.token;

            localStorage.setItem("token", token);

            console.log("TOKEN:", token);
            alert("Login successful");

            navigate("/home");

        } catch (error) {
            console.log("ERROR:", error.response?.data);
            alert(error.response?.data?.message || "Login failed ❌");
  
        }
    };

  return (
    <div className='container' style={{ marginTop: "185px" }}>
    <h2 className='heading'>Login</h2>
    <br />
    <div className='form'>
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="row">
                <label>Email<sup className="star">*</sup></label>
                <input type="email" {...register('email', { required: "Email is required" })} />
            </div>
                {errors.Email && <p>{errors.Email.message}</p>}
           
            
            <div className="row">
                    <label>Password<sup className="star">*</sup></label>
                    <input type="password"
                        {...register('password', {
                            required: "Password is Required",
                            minLength: { value: 8, message: "Min Length 8" },
                            maxLength: { value: 16, message: "Max Length 16" }
                        })} />
            </div>
                    {errors.Password && <p>{errors.Password.message}</p>}
            <br />
            <div className="field">
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Login"}
            </button>

            </div>
        </form>
        <br />
        <div className='redirect_div'>
                    <button className='redirect_btn' onClick={handleRedirect}>Dasboard</button>
                </div>
    </div>
</div>
  )
}

export default Login