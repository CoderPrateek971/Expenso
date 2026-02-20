import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
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
    <h2 className='heading'>Login</h2>
    <br />
    <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <label>Email<sup className="star">*</sup></label>
                <input type="email" {...register('Email', { required: "Email is required" })} />
            </div>
                {errors.Email && <p>{errors.Email.message}</p>}
           
            
            <div className="row">
                    <label>Password<sup className="star">*</sup></label>
                    <input type="password"
                        {...register('Password', {
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
    </div>
</div>
  )
}

export default Login