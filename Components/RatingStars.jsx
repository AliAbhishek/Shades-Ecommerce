import React from "react";

import ReactStarsRating from "react-awesome-stars-rating";



// const onChange = (value) => {
//   console.log(`React Stars Rating value is ${value}`);
// };

const ReactStarsExample = ({ value,changeRating,size }) => {
  return <ReactStarsRating onChange={changeRating} value={value}  size={size} />;
};

export default ReactStarsExample
