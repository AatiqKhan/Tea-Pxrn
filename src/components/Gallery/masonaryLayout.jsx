import React from "react";

import Masonry from "@mui/lab/Masonry";

//import { useState, useEffect } from "react";

export default function MasonaryLayout({ item }) {
  //const { id, image, likes_count, alt_text } = item;

  return (
    <>
      <div className="p-12">
        <div className="h-auto w-full">
          <Masonry columns={5} spacing={2}>
            {item &&
              item.map((src, i) => (
                <div key={i} className="w-full">
                  <img
                    src={src}
                    // alt={image.alt_text}
                    alt={`Gallery image ${i + 1}`}
                    loading="lazy"
                    className="block w-full rounded-2xl"
                  />
                </div>
              ))}
          </Masonry>
          {/* <p>LIKES<span>{image.likes_count}</span></p> */}
        </div>
      </div>
    </>
  );
}
