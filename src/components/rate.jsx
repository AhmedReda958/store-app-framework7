import React from "react";

const Rate = (props) => {
  const rate = Math.round(props.rate);
  return (
    <div className="star-rate">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <div key={index} className={index <= rate ? "on" : "off"}>
            <span className="star">&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default Rate;
