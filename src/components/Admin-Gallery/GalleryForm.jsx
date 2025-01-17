import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";

import { useCreateGallery } from "./useCreateGallery";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function GalleryForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { isAdding, addImage } = useCreateGallery();

  function onSubmit(data) {
    addImage(
      { ...data, image: data.image[0] },
      {
        onSuccess: () => reset(),
      },
    );
    //console.log(data);
  }
  function onError(errors) {
    console.log(errors);
  }
  return (
    <>
      <div>Gallery Form</div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            {...register("image", { required: "This Field is Required" })}
          />
        </Button>
        {errors?.image?.message && (
          <p className="text-red-700">{errors.image.message}</p>
        )}
        <TextField
          id="outlined-basic"
          label="alt_text"
          variant="outlined"
          {...register("alt_text", { required: "This Field is Required" })}
        />
        {errors?.alt_text?.message && (
          <p className="text-red-700">{errors.alt_text.message}</p>
        )}
        <div>
          <button type="reset">cancel</button>
          <button disabled={isAdding}>add</button>
        </div>
      </form>
    </>
  );
}
