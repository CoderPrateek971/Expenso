import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch,
    } = useForm();

    const handleRedirect = () => {
        navigate("/Login")
    }

    const password = watch("password");

    const navigate = useNavigate();
   

    const handleSignup = async (data) => {
        try{
            const response = await axios.post("https://expenso-osyg.onrender.com/api/v1/auth/signup",
                {
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    password: data.password
                }
            );
            alert(response.data.message);
            navigate("/Login");

        }catch(err){
            alert(err.response.data.message);
        }
    };

    return (
        <div className='container' style={{ marginTop: "185px" }}>
            <h2 className='heading'>Sign Up</h2>
            <br />
            <div className='form'>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="row">
                        <label>Email<sup className="star">*</sup></label>
                        <input type="email" {...register('email', { required: "Email is required" })} />
                    </div>
                    {errors.email && <p>{errors.email.message}</p>}
                    <div className="info">
                        <div className="field">
                            <label>First Name<sup className="star">*</sup></label>
                            <input {...register('first_name', { required: "First name is required" })} />
                            {errors.first_name && <p>{errors.first_name.message}</p>}
                        </div>

                        <div className="field">
                            <label>Last Name</label>
                            <input {...register('last_name')} />
                        </div>
                    </div>

                    <div className='info'>
                        <div className="field">
                            <label>Password<sup className="star">*</sup></label>
                            <input type="password"
                                {...register('password', {
                                    required: "Password is Required",
                                    minLength: { value: 8, message: "Min Length 8" },
                                    maxLength: { value: 16, message: "Max Length 16" }
                                })} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>



                        <div className="field">
                            <label>Confirm Password<sup className="star">*</sup></label>
                            <input type="password"
                                {...register('confirmPassword', {
                                    required: "Confirm password required",
                                    validate: v => v === password || "Passwords do not match"
                                })}
                            />
                            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                    <br />
                    <div className="field">
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Sign Up"}
                        </button>
                        
                    </div>
                </form>
                <br />
                <div className='redirect_div'>
                        <h6>Already have an account?</h6>
                        <button className='redirect_btn' onClick={handleRedirect}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp