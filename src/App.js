import React, { Component } from 'react'
import './App.css'

const SVG = () =>
  <svg width='640' height='480' xmlns='http://www.w3.org/2000/svg' svg='http://www.w3.org/2000/svg'>
    <g>
      <title>Layer 1</title>
      <path stroke='#000000' id='svg_11' d='m187.65548,67.98355c-2.41627,0 64.03124,109.41436 65.23937,109.41436c1.20814,0 49.5336,-57.52714 49.5336,-55.27117c0,2.25597 138.93571,231.23653 -88.19397,227.85258c-227.12968,-3.38395 -24.16273,-281.99577 -26.579,-281.99577z' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='5' fill='#ff7f00' />
      <path id='svg_9' d='m197,97c-2,0 53,97 54,97c1,0 41,-51 41,-49c0,2 115,205 -73,202c-188,-3 -20,-250 -22,-250z' stroke-linecap='null' stroke-linejoin='null' stroke-dasharray='null' stroke-width='5' stroke='#000000' fill='#FF0000' />
    </g>
  </svg>
class App extends Component {
  render () {
    return (
      <div className='App' onClick={(e) => window.alert('Its Lit 🔥')}>
        <SVG />
      </div>
    )
  }
}

export default App
