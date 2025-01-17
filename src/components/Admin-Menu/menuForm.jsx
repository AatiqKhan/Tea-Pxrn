import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { inputBaseClasses } from "@mui/material/InputBase";
import { useForm } from "react-hook-form";
import { useCreateMenu } from "./useCreateMenu";
import { useEditMenu } from "./useEditMenu";

export default function MenuForm({ menuEdit = {} }) {
  const { id: editId, ...editValues } = menuEdit;
  const isEdit = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEdit ? editValues : {},
  });
  const { errors } = formState;
  const { isAdding, createMenu } = useCreateMenu();
  const { isEditing, editMenu } = useEditMenu();

  function onSubmit(data) {
    if (isEdit) {
      editMenu(
        { newMenuData: data, id: editId },
        {
          onSuccess: () => reset(),
        },
      );
      //console.log("xxx", data);
    } else
      createMenu(data, {
        onSuccess: () => reset(),
      });
    //mutate(data);
  }
  function onError(errors) {
    console.log(errors);
  }

  const isWorking = isAdding || isEditing;

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

        <button disabled={isWorking}>
          {isEdit ? "Edit Menu" : "Add Menu"}
        </button>
      </form>
    </>
  );
}
