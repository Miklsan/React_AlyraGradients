import React from "react"
import GradientPill from "./GradientPill"
import GradientTitle from "./GradientTitle"
import GradientCode from "./GradientCode"
import GradientButton from "./GradientButton"

const Gradient = ({ colorStart, colorEnd, name }) => {
    return (
        <li className="col-lg-3 col-md-4 col-sm-6">
            <div className="card p-3 mb-4 shadow">
                <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
                <GradientTitle>{name}</GradientTitle>
                <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
                <GradientButton />
            </div>
        </li>
    );
};

export default Gradient