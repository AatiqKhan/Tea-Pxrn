import React from "react";
import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

export default function SigninForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit({ fullName, email, number, password }) {
    signup({ fullName, email, number, password }, { onSettled: reset });
  }
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            {...register("fullName", { required: "This Field is Required" })}
          />
          {errors?.fullName?.message && (
            <p className="text-red-700">{errors.fullName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            {...register("email", {
              required: "This Field is Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter valid email address",
              },
            })}
          />
          {errors?.email?.message && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            type="number"
            {...register("number", {
              required: "This Field is Required",
            })}
          />
          {errors?.number?.message && (
            <p className="text-red-700">{errors.number.message}</p>
          )}
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            {...register("password", {
              required: "This Field is Required",
              minLength: {
                value: 8,
                message: "minimun password length is 8  ",
              },
            })}
          />
          {errors?.password?.message && (
            <p className="text-red-700">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            type="password"
            {...register("passwordconfirm", {
              required: "This Field is Required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match ",
            })}
          />
          {errors?.passwordconfirm?.message && (
            <p className="text-red-700">{errors.passwordconfirm.message}</p>
          )}
        </div>
        {/* <Button
          variant="contained"
          color="primary"
          type="submit"
          className="mt-4 w-full"
        >
          Sign Up
        </Button> */}
        <button disabled={isLoading}> Create User</button>
      </form>
    </div>
  );
}
