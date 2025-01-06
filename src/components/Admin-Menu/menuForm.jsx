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
  const { register, handleSubmit, reset } = useForm();

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
    console.log(data);
    mutate(data);
  }

  return (
    <>
      <div>MENU FORM</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          id="outlined-required"
          label="Item"
          {...register("item")}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          {...register("description")}
        />
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
          {...register("price")}
        />
        <button type="reset">cancel</button>

        <button disabled={isAdding}>add</button>
      </form>
    </>
  );
}
