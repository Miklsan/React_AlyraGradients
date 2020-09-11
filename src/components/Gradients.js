import React, {useState} from "react"
import GradientsList from ".//GradientsList"
import GradientSelect from ".//GradientsSelect"
import gradients from "../gradients"

const Gradients = () => {
    const [filter, setFilter] = useState("tous")

    const filteredGradients = gradients.filter((el) => {
        if (filter === "tous") {
            return true
        }
        return el.tags.includes(filter)
    })
    return (
        <section className="container">
            <h1 className="text-center my-4">Alyra Gradients</h1>
            <GradientSelect filter={filter} setFilter={setFilter} />
            <GradientsList list={filteredGradients} />
        </section>
    )


}

export default Gradients