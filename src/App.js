import React from 'react';
import Gradients from "./components/Gradients"
import gradients from "./gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"




function App() {
  return (
    <>
      <GradientsHeader list={gradients}>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <Gradients />
      <Footer />
    </>
  )
}


export default App;
