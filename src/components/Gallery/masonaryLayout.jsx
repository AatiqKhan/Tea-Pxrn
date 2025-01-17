import React from "react";

import Masonry from "@mui/lab/Masonry";

//import { useState, useEffect } from "react";

export default function MasonaryLayout() {
  // const [images, setimages] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const query = `*[_type == "gallery"]{ "image": image.asset->url }`;
  //       try {
  //         const result = await client.fetch(query);

  //         setimages(result);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const images = [
    "slider/image1.jpg",
    "slider/image2.jpg",
    "slider/image3.jpg",
    "slider/image4.jpg",
    "slider/image5.jpg",
    "slider/logo.png",
    "slider/logo2.png",
    "/menu/picsec1.jpeg",
    "/menu/picsec2.jpeg",
    "/menu/picsec3.jpeg",
    "/menu/picsec4.jpeg",
    "/menu/image1.jpeg",
    "/menu/image2.jpeg",
    "/menu/image3.jpeg",
    "/menu/image4.jpeg",
    "/menu/image5.jpeg",
    "/menu/image6.jpeg",
    "/menu/image7.jpeg",
    "/menu/image8.jpeg",
  ];
  return (
    <>
      <div>
        <div>
          <Masonry columns={4} spacing={2}>
            {images &&
              images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    // alt={images.alt}
                    loading="lazy"
                  />
                </div>
              ))}
          </Masonry>
        </div>
      </div>
    </>
  );
}
