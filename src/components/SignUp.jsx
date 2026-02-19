import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Heading.css'
import './SignUp.css'

const SignUp = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch,
    } = useForm();

    const password = watch("Password");

    const onSubmit = (data) => {
        console.log(data);
    };
   
    return (
        <div className='container'>
            <h2 className='heading'>Sign Up</h2>
            <br />
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <label>Email<sup className="star">*</sup></label>
                        <input type="email" {...register('Email', { required: "Email is required" })} />
                    </div>
                        {errors.Email && <p>{errors.Email.message}</p>}
                    <div className="info">
                        <div className="field">
                            <label>First Name<sup className="star">*</sup></label>
                            <input {...register('FirstName', { required: "First name is required" })} />
                            {errors.FirstName && <p>{errors.FirstName.message}</p>}
                        </div>

                        <div className="field">
                            <label>Last Name</label>
                            <input {...register('LastName')} />
                        </div>
                    </div>

                    <div className='info'>
                        <div className="field">
                            <label>Password<sup className="star">*</sup></label>
                            <input type="password"
                                {...register('Password', {
                                    required: "Password is Required",
                                    minLength: { value: 8, message: "Min Length 8" },
                                    maxLength: { value: 16, message: "Max Length 16" }
                                })} />
                            {errors.Password && <p>{errors.Password.message}</p>}
                        </div>



                        <div className="field">
                            <label>Confirm Password<sup className="star">*</sup></label>
                            <input type="password"
                                {...register('ConfirmPassword', {
                                    required: "Confirm password required",
                                    validate: v => v === password || "Passwords do not match"
                                })}
                            />
                            {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}
                        </div>
                    </div>
                    <br />
                    <div className="field">
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Sign Up"}
                    </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp