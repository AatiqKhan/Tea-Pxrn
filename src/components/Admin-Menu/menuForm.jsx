import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
//import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";
import { useForm } from "react-hook-form";
import { addMenuItem } from "../../services/fetchMenu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export default function MenuForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate } = useMutation({
    mutationFn: addMenuItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menu"] }); // Refresh 'menu' query after deletion
      toast.success("added an item from menu");
      reset();
    },
    onError: (error) => toast.error(error.message), // Handle errors
  });

  function onSubmit(data) {
    mutate(data);
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <div>MENU FORM</div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <TextField
          id="outlined-required"
          label="Item"
          {...register("item", { required: "This Field is Required" })}
        />
        {errors?.item?.message && (
          <p className="text-red-700">{errors.item.message}</p>
        )}
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          {...register("description", {
            required: "This Field is Required",
          })}
        />
        {errors?.description?.message && (
          <p className="text-red-700">{errors.description.message}</p>
        )}
        <TextField
          id="outlined-suffix-shrink"
          label="price"
          variant="outlined"
          type="number"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    opacity: 0,
                    pointerEvents: "none",
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  $
                </InputAdornment>
              ),
            },
          }}
          {...register("price", {
            required: "This Field is Required",
            min: { value: 0, message: "Price cannot be negative" },
          })}
        />
        {errors?.price?.message && (
          <p className="text-red-700">{errors.price.message}</p>
        )}
        <button type="reset">cancel</button>

        <button disabled={isAdding}>add</button>
      </form>
    </>
  );
}
