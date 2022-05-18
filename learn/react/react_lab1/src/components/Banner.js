import React from "react";

function Banner(props) {
  return (
    <div>
      <input type="text" onChange={props.clickCallback} />
    </div>
  );
}

export default Banner;
