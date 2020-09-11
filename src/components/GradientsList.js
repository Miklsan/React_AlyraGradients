import React from "react"
import Gradient from "./Gradient/Gradient"


const GradientsList = ({ list }) => {
    return (
      <ul className="row list-unstyled">
        {list.map((el) => (
          <Gradient
            name={el.name}
            colorStart={el.start}
            colorEnd={el.end}
            key={el.name}
          />
        ))}
      </ul>
    );
  };


export default GradientsList