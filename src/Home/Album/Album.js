import React, { useEffect, useState } from "react";

import SingleImage from "../SingleImage/SingleImage";

const Album = () => {
  const [album, setAlbum] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setAlbum(data));
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-center my-5 text-warning font-style">Gallery</h2>
      <div className="mx-auto">
        {trigger && (
          <div>
            <div className="row mx-auto text-center">
              {album.map((image) => (
                <SingleImage image={image} key={image.id}></SingleImage>
              ))}
            </div>
            <div className="w-100">
              <button
                className="d-block bg-warning mt-3 mx-auto btn fw-bold"
                onClick={() => {
                  setTrigger(!trigger);
                }}
              >
                Show Less
              </button>
            </div>
          </div>
        )}
        {!trigger && (
          <div>
            <div className="row mx-auto text-center">
              {album.slice(0, 3).map((image) => (
                <SingleImage image={image} key={image.id}></SingleImage>
              ))}
            </div>
            <div className="w-100">
              <button
                className="d-block bg-warning mt-3 mx-auto btn fw-bold"
                onClick={() => {
                  setTrigger(!trigger);
                }}
              >
                Show More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Album;
