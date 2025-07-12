import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { inputBaseClasses } from "@mui/material/InputBase";
import { useForm } from "react-hook-form";
import { useCreateMenu } from "./useCreateMenu";
import { useEditMenu } from "./useEditMenu";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Controller } from "react-hook-form";
import { Input } from "@mui/material";

export default function MenuForm({ menuEdit = {}, setForm }) {
  const { id: editId, ...editValues } = menuEdit;
  const isEdit = Boolean(editId);
  const { register, handleSubmit, reset, formState, control } = useForm({
    defaultValues: isEdit ? editValues : {},
  });
  const { errors } = formState;
  const { isAdding, createMenu } = useCreateMenu();
  const { isEditing, editMenu } = useEditMenu();

  function onSubmit(data) {
    console.log("xxx", data);
    setForm((show) => !show);

    if (isEdit) {
      editMenu(
        { newMenuData: data, id: editId },
        {
          onSuccess: () => reset(),
        },
      );
    } else {
      //console.log(category);
      createMenu(data, {
        onSuccess: () => reset(),
      });
    }
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
        {/*
        -------------another input option from MUI----------
        <Input
          placeholder="ITEM Type in here…"
          variant="outlined"
          {...register("item", { required: "This Field is Required" })}
        /> */}
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
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>

          <Controller
            name="category"
            control={control}
            defaultValue=""
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <Select {...field} labelId="category-label" label="Category">
                <MenuItem value="Coffee">Coffee</MenuItem>
                <MenuItem value="Tea">Tea</MenuItem>
                <MenuItem value="Tidbits">Tidbits</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        {errors?.category?.message && (
          <p className="text-red-700">{errors.category.message}</p>
        )}

        <button type="reset">cancel</button>

        <button disabled={isWorking}>
          {isEdit ? "Edit Menu" : "Add Menu"}
        </button>
      </form>
    </>
  );
}
